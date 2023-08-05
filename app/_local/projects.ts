import type { ProjectType } from '@/app/@types/ProjectType';

export const projects: ProjectType[] = [
  {
    id: 1,
    'description': 'Website that allows users to compare prices of items listed in different shops.',
    'link': 'https://github.com/Makhubedu/compare-prices',
    'image': 'https://cdn3.vectorstock.com/i/1000x1000/55/67/no-image-available-picture-vector-31595567.jpg',
    'skills': [
      'Python',
      'Django',
      'Rest API\'s'
    ],
    'projectName': 'Compare Prices of items'
  },
  {
    id: 2,
    'skills': [
      'Google Cloud',
      'React'
    ],
    'image': 'https://d1s4umho1unrgr.cloudfront.net/2021/02/24/13/45/25/1bd9b75d-c6e7-4135-ae49-4c2ff6e54951/Ruwach.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMXM0dW1obzF1bnJnci5jbG91ZGZyb250Lm5ldC8yMDIxLzAyLzI0LzEzLzQ1LzI1LzFiZDliNzVkLWM2ZTctNDEzNS1hZTQ5LTRjMmZmNmU1NDk1MS9SdXdhY2gucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjkyOTgyMTY3fX19XX0_&Signature=e0tebLERU0p399QUPW-Um7uoz~8ldMEAcPF0BhcoVnkEbkrF8P7dOzHo3y98ILc8JquoQnZujFcKROYRhLy6uK0X9DIHW1zMzxJryHY2dRKMjtHOk5Md2vatcylIq3yIPSXbk5tuAqELc0O9wUUMUqwfHbZ5guTmqAt~kJIjpxBE57J62R4py4avhNBAujloHQwuf~z9~zt1ie49OUJUJajuBusC0SJDO-zFZbQRMwY0d2IjsOh4yKxX~T5K21DSFovq~kQDIMMb2YBKALVEDt07RvDYsIqIuH0Qtaqr8~XenobHmMcWqP4rghvL83NSMixojt01I4dV2j1TgLyWZg__&Key-Pair-Id=APKAITFCDZDSWOJU5OZA', // eslint-disable-line max-len
    'link': 'https://ruwach-test.web.app/',
    'projectName': 'Ruwach Foundation School Test',
    'description': 'The site allows users to write the test and get marks immediately after completing the test'
  },
  {
    id: 3,
    'projectName': 'Portfolio Website',
    'link': 'https://github.com/Makhubedu/khuty-sa',
    'description': 'Portfolio website for a music producer.',
    'image': 'https://cdn3.vectorstock.com/i/1000x1000/55/67/no-image-available-picture-vector-31595567.jpg',
    'skills': [
      'Nextjs',
      'Vercel'
    ]
  },
  {
    id: 4,
    'projectName': 'AI based news',
    'image': 'https://cdn3.vectorstock.com/i/1000x1000/55/67/no-image-available-picture-vector-31595567.jpg',
    'link': 'https://github.com/Makhubedu/alan-ai-news',
    'skills': [
      'Web Dev',
      'alan-ai'
    ],
    'description': 'Voice interactive AI news controlled through voice commands'
  }
];