import Contact from '@/components/Contact';
import GitHub from '../icons/GitHub';
import InternalHeader from '@/components/InternalHeader';
import LinkedIn from '../icons/LinkedIn';
import Title from '@/components/Title';


const Contacts = () => {
  return (
    <div className='w-full max-w-7xl'>

      {/* Header Section */}
      <section className='p-8 sm:pb-0 w-full max-w-7xl'>
        <InternalHeader projectName="contacts" description="Talk to Derrick" />
      </section>

      {/* Contact Derrick Section */}
      <section className='relative mt-[74px] w-full max-w-7xl sm:mt-6'>
        <Contact />
      </section>

      {/* Contact Derrick Section */}
      <section className='relative mt-[74px] w-full max-w-7xl'>
        <Title noline>all-media</Title>
        <ul className='flex gap-5 items-center mt-5 sm:flex-col sm:justify-start sm:items-start'>
          <li className='flex gap-3 items-center font-fira text-base text-secondary'><LinkedIn /> derrick-makhubedu-58b716185</li>
          <li className='flex gap-3 items-center font-fira text-base text-secondary'><GitHub /> Makhubedu</li>
        </ul>
      </section>

    </div>
  )
}

export default Contacts;