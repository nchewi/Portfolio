"use client"
import GithubIcon from "/public/github-icon.svg"
import LinkedinIcon from "/public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className="padding-container max-container grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="contact">
        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm currently looking for opportunities, my inbox is always open.
                Whether you have a question or you just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="github.com/nchewi">
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href="www.linkedin.com/in/nchewi-vincent-enya">
                    <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                </Link>
            </div>
        </div> 
        <div>
            <form className="flex flex-col">
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block text-sm mb-2 font-medium">Your Email</label>
                    <input 
                        name="email"
                        type="email" 
                        id="email" 
                        required 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="youremail@gmail.com"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
                    <input 
                        name="subject"
                        type="text" 
                        id="subject" 
                        required 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="message" 
                    className="text-white block text-sm mb-2 font-medium">
                    Message
                    </label>
                    <textarea 
                    name="message" 
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                </div>
                <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection