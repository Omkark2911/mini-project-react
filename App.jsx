import './App.css'
import { Bookmark } from 'lucide-react'

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/3LDad9syR8HUFnA8E9jlRk1XQPqUNFAj8rrytQ0f7CA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8x/Mi8xMy8wNS80NC9t/ZXRhLTY4Njc2MjNf/NjQwLnBuZw",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://i.pinimg.com/originals/6f/4c/75/6f4c75dd04a92e0c5600333fc6fd9ce3.jpg",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Cloud Support Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/ndNir8ZigRKeeK3YMpy0sEdZwrCH8O1TFX1luhmLOCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vOWZhOTJh/YzVhOTQ5ODUwMmQy/NzA3Y2VkNzk4ZDc2/M2ZlNzQ5MGVjYy0x/NjAweDEwMjYucG5n/P3c9MTkyMCZxPTcy/JmZtPXdlYnA",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Development Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/b0dJXY0LdGUAmqxJuowklLWaObdzW3TxuNa_CwnqDdc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pcHJz/b2Z0d2FyZW1lZGlh/LmNvbS8yMTkvZmls/ZXMvMjAyNTEyLzY5/MmY1MDQ3M2Q2MzMy/YjQzYWJiYzVhMV9u/dmlkaWEtbG9nby12/ZXJ0LTFjd2h0L252/aWRpYS1sb2dvLXZl/cnQtMWN3aHRfdGht/Yi5wbmc",
      companyName: "NVIDIA",
      datePosted: "6 weeks ago",
      post: "AI Research Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$88/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/bY5d4OgeVjbV60PA_cJVclR_2h58zRtAHAL9DNzNMOU/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE5LzMxLzg1LzI1/LzM2MF9GXzE5MzE4/NTI1NjlfUTIyNDd6/UmVCMmxOTlVGaW8z/Zzh6V1M1bWltNVdM/ZEsuanBn",
      companyName: "Uber",
      datePosted: "12 days ago",
      post: "Data Engineer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/RuqGqICOUNfVopTXwwJ_N2rARCFY67DkXT7u2eLY_LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
      companyName: "Adobe",
      datePosted: "8 weeks ago",
      post: "UI Engineer",
      tag1: "Part-time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://img.logo.dev/salesforce.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png&theme=dark",
      companyName: "Salesforce",
      datePosted: "10 weeks ago",
      post: "Platform Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$68/hr",
      location: "Mumbai, India"
    }
  ];

  return (
    <div id="parent">
      {jobOpenings.map((elem) => (
        <CardComponent key={elem.companyName} job={elem} />
      ))}
    </div>
  )
}


function CardComponent({ job }) {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={job.brandLogo} alt={job.companyName} />
          <button>Save <Bookmark size={14} /></button>
        </div>
        <div className="center">
          <h3>{job.companyName} <span>{job.datePosted}</span></h3>
          <h2>{job.post}</h2>
          <div id="tag">
            <h4>{job.tag1}</h4>
            <h4>{job.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{job.pay}</h3>
          <p>{job.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default App
