import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
// import { TestimonialData } from "../../FakeDb/Testimonial";
// import { HeadingInfo } from "../SharedComponent/HeadingInfo";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [itemsPerView, setItemsPerView] = useState(3);

  const TestimonialData = 
[
    {
        id: 1,
        Name: "David Malan",
        Company: "Fuel Company",
        review:
            "We are so happy with everything that the logistics group has done for us. They have excellent delivery to North-Eastern region of united states. I highly recommend them! Superb communication, pick up and delivery right on time.",
        rating: "5",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format",
    },
    {
        id: 2,
        Name: "Clifford Stratton",
        Company: "Restoration Company",
        review:
            "Providers of personal safety, comfort, and protection products for the outdoor enthusiast It has been our experience that Classic Transportation is in an elite group of full line transportation providers.",
        rating: "5",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format",
    },
    {
        id: 3,
        Name: "Sarah Johnson",
        Company: "Manufacturing Corp",
        review:
            "Outstanding service quality and reliability. Their team goes above and beyond to ensure our shipments are handled with care. The tracking system is excellent and keeps us informed throughout the process.",
        rating: "5",
        image:
            "https://cdn.theorg.com/0035a7a5-bf22-4782-b81c-c508b7306d7b_thumb.jpg",
    },
    {
        id: 4,
        Name: "Michael Chen",
        Company: "Tech Solutions",
        review:
            "Professional, efficient, and cost-effective logistics solutions. They've streamlined our supply chain operations significantly. Highly recommended for businesses looking for reliable transportation partners.",
        rating: "5",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face&auto=format",
    },
    {
        id: 5,
        Name: "Emily Rodriguez",
        Company: "Retail Enterprises",
        review:
            "Exceptional customer service and timely deliveries. Their attention to detail and commitment to excellence has made them our go-to logistics partner. Couldn't be happier with their services.",
        rating: "5",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format",
    },
    {
        id: 6,
        Name: "Robert Thompson",
        Company: "Industrial Supply",
        review:
            "Reliable, professional, and always on time. Their logistics solutions have helped us improve our delivery efficiency by 40%. The team is knowledgeable and always ready to help with any challenges.",
        rating: "5",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face&auto=format",
    },
];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const maxIndex = Math.max(0, TestimonialData.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < parseInt(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % TestimonialData.length;
      visible.push(TestimonialData[index]);
    }
    return visible;
  };

  const getCardStyle = (index) => {
    if (index === 1) {
      return "bg-black text-white";
    }
    return "bg-[#BABABA]/10 text-gray-800";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      

      <h2 className="text-2xl md:text-4xl font-bold my-3 text-center leading-snug">
        What Our Customer Say
      </h2>
      <p className="lg:w-[60%] mx-auto text-center mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto obcaecati assumenda, earum aliquam aperiam iure itaque deserunt ad doloremque, quod illum facere libero nisi similique eos mollitia, reprehenderit dicta.</p>

      <div className="relative mt-4">
        {/* Testimonial Cards */}
        <div className="flex justify-center items-stretch flex-wrap">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${currentIndex}-${index}`}
              className={`
                relative p-6 transition-all duration-500 ease-in-out
                flex-1 min-w-[250px] max-w-sm
                ${getCardStyle(index)}
              `}
            >
              {/* Quote Icon */}
              <div
                className={`absolute top-4 right-4 ${
                  index === 1 ? "text-yellow-400" : "text-yellow-500"
                }`}
              >
                <Quote className="w-8 h-8 fill-current" />
              </div>

              {/* Profile Section */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.Name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      index === 1 ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {testimonial.Name}
                  </h3>
                  <p
                    className={`text-sm ${
                      index === 1 ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    {testimonial.Company}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <p
                className={`text-sm leading-relaxed mb-4 min-h-[120px] ${
                  index === 1 ? "text-gray-100" : "text-gray-700"
                }`}
              >
                {testimonial.review}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8 ">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-black shadow-lg cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-black shadow-lg cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
