import Template from './components/Template'
import { FaArrowRight , FaArrowLeft} from "react-icons/fa6";
import { useEffect, useState } from 'react';



function App() {
  
  const data = {
    "About Me":{
      description : "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a..."
    },
    "Experiences":{
      description : "This is sample text for experience, illustrating how one can effectively convey their professional journey. Over the past few years, I have honed my skills in web development, particularly in utilizing the MERN stack to build robust and scalable applications. My experience includes collaborating with cross-functional teams to design, develop, and deploy user-centric solutions that meet both client and market demands. Additionally, I have consistently demonstrated an ability to troubleshoot complex issues, optimize performance, and ensure the seamless integration of new technologies into existing systems. This experience has not only enhanced my technical expertise but also strengthened my problem-solving abilities and my capacity to adapt to new challenges in a dynamic work environment."
    },
    "Recommended":{
      description : "Recommendations have played a crucial role in shaping my professional growth and development. Throughout my career, the feedback and guidance from mentors, colleagues, and industry experts have provided valuable insights that have helped me refine my skills and approach to problem-solving. Whether it was a suggestion to explore new technologies or advice on best practices in project management, these recommendations have enabled me to stay ahead in a rapidly evolving field. Embracing constructive feedback has allowed me to continuously improve, adapt, and deliver high-quality results in every project I undertake"
    }
  }
  const [currentTab, setCurrentTab] = useState("About Me");
  const [image, setImage] = useState(null); // To preview the currently selected image
  const [imageList, setImageList] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the preview image
      };
      reader.readAsDataURL(file);
    }
    
    if (image) {
      // Add the current image to the list of images
      setImageList([...imageList, image]);
      document.getElementById('fileInput').value = ''; // Clear file input
    }
  };

  const handleDivClick = () => {
    document.getElementById('fileInput').click();
  };



  return (
    <div className="w-[100vw] h-[100vh] relative flex justify-end">
      <div className="w-[720px] mt-[2rem] mr-9 flex flex-col gap-y-4">


        {/* Introduction widget */}
        <Template>
            <div className='w-[95%] h-[62px] flex rounded-[23px] bg-[#171717] px-1 py-1 gap-3'>
              <div className={`w-full h-full font-poppins text-center text-[#A3ADB2] leading-[16.12px]  text-lg flex justify-center items-center rounded-[16px] cursor-pointer ${currentTab === "About Me" ? `bg-[#363C43] text-white shadow-custom transition-shadow duration-300` : ``} `}   onClick = { (event) => {setCurrentTab("About Me")}}>About Me</div>
              <div className={`w-full h-full font-poppins text-center text-[#A3ADB2] leading-[16.12px]  text-lg flex justify-center items-center rounded-[16px] cursor-pointer ${currentTab === "Experiences" ? `bg-[#363C43] text-white shadow-custom transition-shadow duration-300` : ``} `}   onClick = { (event) => {setCurrentTab("Experiences")}}>Experiences</div>
              <div className={`w-full h-full font-poppins text-center text-[#A3ADB2] leading-[16.12px]  text-lg flex justify-center items-center rounded-[16px] cursor-pointer ${currentTab === "Recommended" ? `bg-[#363C43] text-white shadow-custom transition-shadow duration-300` : ``} `}  onClick = { (event) => {setCurrentTab("Recommended" )}}>Recommended</div>
            </div>
            <div className='w-full h-[175px] overflow-y-scroll text-[#969696] leading-[25.2px] text-xl custom-scrollbar'>
            <p className='w-[95%] text-justify'>
          { data[currentTab].description}
            </p>
            </div>
        </Template>


        {/* Gallery Widget */}
        <Template>
          {/* upper section */}
          <div className='w-[95%] h-[65px] flex flex-row justify-between items-baseline '>
            <div className='h-[62px] bg-[#171717] flex  items-center text-center text-white font-poppins rounded-[20px] px-10 shadowGallery'>
            Gallery
            </div>
            <div className='w-fit h-full flex flex-row gap-6 mr-4'>
        
              <div className='h-[46px] bg-[#FFFFFF08]  text-white font-semibold shadow-nustom px-6 py-4 rounded-[104px] text-sm font-jakarta flex items-center justify-center cursor-pointer '  onClick={handleDivClick} >            <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />+ ADD IMAGE</div>
   

              <div className='flex flex-row gap-3'>
                <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center arrowBackground '>
                <FaArrowLeft className='text-[#6F787C]' />
                </div>
                <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center arrowBackground custom-box-shadow '>
                <FaArrowRight className='text-[#6F787C]'/>
                </div>
              </div>

            </div>
          </div>
          {/* lower section */}
          <div className='w-full h-[175px] flex  flex-row gap-6 overflow-y-hidden  overflow-x-auto  overscroll-contain custom1-scrollbar object-fill'>
            {console.log(imageList)}
            
          {imageList.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`Uploaded ${index}`} style={{ width: '190px', height: '100%' ,borderRadius: '24px'}} className='min-w-[200px] object-cover' />
          ))}
          </div>
        </Template>
      </div>
   
    </div>
  );
}

export default App;
