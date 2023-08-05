import { DailyCode } from '@/app/@types/DailyCode';
import { google } from 'googleapis';


export const getDailyCode = async () : Promise<DailyCode | null> => {


    
  const code = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    undefined,
    // we need to replace the escaped newline characters
    // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
    process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    code
  );
    
  const sheets = google.sheets({ version: 'v4', auth: jwt });
      
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'Derrick Daily Code',
  });

  const rows = response.data.values as DailyCode[];

  if (rows?.length <= 0) {
    return Promise.resolve(null);
  }

  return rows[0] as DailyCode;
};
