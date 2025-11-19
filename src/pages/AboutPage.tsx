import React from 'react'

const AboutPage = () => {
  return (
    <div className='container'>
      <div className='about-wrapper'>
        <div className='section-one'>
          <div className='img-container'>
            <img src="../../public/about1.jpg" alt="" />
          </div>
          <div>
            <p className='title'>About us</p>
            <p>
              We created this platform with a simple idea: to make it easier for people to find and book venues that fit their needs. Whether you're planning an event, a workshop, a photoshoot, or a private gathering, we want to help you find the perfect space — quickly, smoothly, and securely.
              Every day, we work to make the experience as seamless as possible through clear information, smart filtering tools, and a safe booking process. Our goal is to connect hosts and guests in a way that feels modern, reliable, and personal.
              Thank you for using our service. We hope you find exactly what you're looking for — and maybe even more.
            </p>
          </div>
        </div>

        <div className='section-two'>
          <div>
            <p className='title'>Meet Our Team</p>
            <p>
              Our team is a diverse group of passionate individuals who share one mission: to make finding and booking the perfect venue effortless. Each of us brings unique skills and perspectives — from tech and design to customer support and operations — all working together to create a seamless experience for our users.
              We value creativity, collaboration, and transparency, and we’re dedicated to building a platform that connects hosts and guests with trust and ease. Behind every feature, every filter, and every booking, there’s a team member committed to making your experience simple, enjoyable, and memorable.
              We believe great spaces create great experiences — and we’re here to help you find them.
            </p>
          </div>
          <div className='img-container'>
            <img src="../../public/about2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
