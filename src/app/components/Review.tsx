
import Image from "next/image";

export default function ReviewSection() {
  const reviews = [
    {
      name: "Isabella Martinez",
      role: "Film Studies Student",
      quote: "MovieQuiz has completely transformed how I study film history. The diverse categories and challenging questions have helped me retain information better than traditional study methods. Plus, it's incredibly fun!",
      date: "2 days ago",
      likes: 128,
      image: "/team1.jpg", // Replace with actual image path or URL
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Movie Critic",
      quote: "As someone who watches films professionally, I'm impressed by the depth of knowledge required to excel in this game. The multiplayer battles are particularly engaging, and I've even discovered some hidden gems through its challenges!",
      date: "1 week ago",
      likes: 256,
      image: "/team2.jpg", // Replace with actual image path or URL
      rating: 4,
    },
    {
      name: "Alexander Thompson",
      role: "Indie Filmmaker",
      quote: "The attention to detail in MovieQuiz is remarkable. From obscure art house films to blockbuster hits, the range of content keeps me coming back. It's become my daily coffee break entertainment!",
      date: "2 weeks ago",
      likes: 184,
      image: "/team3.jpg", // Replace with actual image path or URL
      rating: 5,
    },
    
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Players Say</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Real feedback from movie enthusiasts who love challenging themselves with MovieQuiz
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md ">
              <div className="flex items-center mb-4 ">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${
                      i < review.rating ? "fill-current" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{`"${review.quote}"`}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{review.date}</span>
                <span>❤️ {review.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}