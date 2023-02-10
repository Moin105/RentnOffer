import React from 'react'
import Button from '../../Components/Buttons/Button'
import Category from '../../Components/Category/Category'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import Header from '../../Components/Header/Header'
import Heading, { Mheading } from '../../Components/Headings/Heading'
import InfoBox from '../../Components/InfoBox/InfoBox'
import Input from '../../Components/Input/Input'
import img from '../../Images/sigma.png'
import img2 from '../../Images/sigma2.png'
import Tags from '../../Components/Tags/Tags'
import './Home.css'
import Howitworks from '../../Components/HowItWorks/Howitworks'
function Home() {
  return (
    <>
      <div className='background-home'>
        <Header  />
        <div className='head'>
          <Mheading color="white" content="What would you like to borrow? The possibilities are endless." textAlign="center" />
        </div>
        <div className='form'>
          <div className='form-container'>
            <Input placeholder="What are you looking for?" label="Item/Experience" type="text" color="#064490" />
            <Input placeholder="Select Category" label="Category" type="text" color="#064490" />
            <Input placeholder="Select state" label="Location" type="text" color="#064490" />
            <Input placeholder="Date" label="Start Date" type="text" color="#064490" />
          </div>

          <Button name="Search" color="#ffffff" bg="#F21B2D" />
        </div>
        <div className='category'> 
          <Heading color="#F21B2D" content="Popular Categories" textAlign="center"/>
          <Tags/>
          <Category name="All Product"/>
          <Category name="Items"/>
          <Category name="Experience"/>
         </div>
         <div className='info-box'>
              <InfoBox cimg={false} about={false} name="Welcome to the Rent & Offer" context="The Rent and Offer is leveling up the consumer-to-consumer industry. We created The Rent and Offer to allow individuals to save and earn money. Why buy expensive items you’ll rarely use when..." img={img} btn={false} color="#064490"/>
         </div>
         <div className='hiw'>
          <Howitworks/>
         </div>
         <div className='info-box'>
              <InfoBox cimg={false} about={false} name="Become a Lender Today!" context="Have items that you use infrequently? Post them here! Becoming a lender is easy. The rent&offer provides lenders the opportunity to earn additional income. Create an account and get started in minutes." img={img2} btn={true} color="#064490"/>
         </div>
        {/*  <div>
        <Heading/>
        <div>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
    </div> */}
      </div>
    </>
  )
}

export default Home