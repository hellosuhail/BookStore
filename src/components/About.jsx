import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
      <div className="flex mt-14 items-center justify-center min-h-screenn">
        <div className="max-w-3xl w-full p-8 shadow-xl rounded-2xl ">
          <h1 className="text-4xl text-[#366679] font-bold mb-8 text-center">About Our Bookstore</h1>
  
          <p className="text-lg mb-6">
            Welcome to <span className="font-semibold">Book Haven</span> – your go-to destination for an exceptional reading experience. Our bookstore is dedicated to offering a vast collection of books across various genres, from timeless classics to modern bestsellers.
          </p>
  
          <p className="text-lg mb-6">
            Our mission is to foster a community of book lovers by providing a curated selection of literature that caters to all age groups and interests. Whether you’re looking for fiction, non-fiction, mystery, fantasy, or educational resources, we have something special for everyone.
          </p>
  
          <p className="text-lg mb-6">
            At <span className="font-semibold">Book Haven</span>, we believe in the power of stories to inspire, educate, and connect people. Our team is passionate about helping you find your next favorite book and creating a warm and welcoming space for every reader.
          </p>
  
          <p className="text-lg mb-6">
            Thank you for choosing <span className="font-semibold">Book Haven</span>. We are excited to be part of your reading journey!
          </p>
  
          <div className="text-center mt-8">
            <Link to="/contact" className="btn border-[#264653] text-[#264653] hover:bg-[#264653] hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutPage;
  