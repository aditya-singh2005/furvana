import React from 'react';
import GridMotion from './React Components/GridMotion';

const petImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://images.wagwalkingweb.com/media/care/hero/1677692861.405729/pet-bird-care-guide-how-to-care-for-a-pet-bird-everything-you-need-to-know.png',
  'https://thumbs.dreamstime.com/b/frightened-fireworks-dog-cat-seek-shelter-under-blankets-independence-day-364428913.jpg',
  'https://img.theweek.in/content/dam/week/news/sci-tech/images/2022/4/5/macaw-bird.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://www.bluecross.org.uk/sites/default/files/d8/assets/images/rabbit%20-%20pair.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkB0t7ndpSJI23alx7kRFkfpCesTlWybCZpfwkj7HoIMM1JeNNoaIvQgo8VXnJcY1S-k&usqp=CAU',
  'https://i.pinimg.com/736x/06/76/d5/0676d5f3f650b286114804c00c4b49f9.jpg',
  'https://media.istockphoto.com/id/506853536/photo/two-rabbits.jpg?s=612x612&w=0&k=20&c=Gf2lpg_WZt7jJhSs86K2qoZWhjLnC4vQoR6weIXpmko=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTWo6BpLIhUD3WPu7759a7U7EGSDMUof4rQ&s', // girgit
  'https://media.istockphoto.com/id/1217408094/photo/stray-beautiful-dog-lean-out-from-cage-and-looking-at-human-dog-abandoned-in-shelter-and.jpg?s=612x612&w=0&k=20&c=TnnfM4WkFORNsK02MKNyji_QJbExT2JhjySXE1ByTyI=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://media.istockphoto.com/id/523040594/photo/shelter-for-homeless-dogs-waiting-for-a-new-owner.jpg?s=612x612&w=0&k=20&c=DcXrbeCGoHQWJPRj4TPZVa_VjvAxCGaPVX5dIX2dXA8=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyD86mqYCWKlITPBqU3fvvQvzJ820YN7b7dw&s',
  'https://t3.ftcdn.net/jpg/05/69/55/18/360_F_569551834_u4zWVntulcOSYnEqXVIoGEs2i5FwCpcK.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJsx9kZHVKEm9HKoCZLswCwvWhVHXirD9ig&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYrYAc46MNeM8IgEVn0kPLZjtG5NrI6lFHw&s', //
  'https://media-be.chewy.com/wp-content/uploads/2024/09/30120620/rabbit-breeds.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://www.shutterstock.com/image-photo/redandgreen-macaw-ara-chloroptera-pauses-600nw-2505389679.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9-gbJT7Homz1vLx3JXyVYR-gLsCUI7HEcBp-KNB2URawtOM9aBCCPvZ9bcOtCE7qdQM&usqp=CAU',
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];


const Section1 = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      
      {/* GridMotion background at the bottom */}
      <div className="absolute inset-0 z-0">
        <GridMotion items={petImages} />
      </div>

      {/* Radial black overlay above grid but behind text */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%)',
        }}
      />

      {/* Foreground Content (text + button) */}
      <div className="relative z-20 flex flex-col items-center text-white px-4">
        {/* Shadow Text Layer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-1rem] text-6xl font-extrabold text-black opacity-40 blur-md select-none pointer-events-none z-10">
          Find Your Furry Best Friend! 🏡
        </div>

        {/* Main Heading */}
        <h1 className="relative text-6xl font-extrabold mb-6 drop-shadow-xl z-20">
           Find Your Furry Best Friend! 🏡
        </h1>

        {/* Subtext */}
        <p className="text-xl max-w-3xl drop-shadow-md opacity-95 z-20">
          Give a loving home to a pet in need. Browse through adorable companions waiting for their forever family.  
          Open your heart, adopt today! ❤️
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-8 py-4 bg-[#FF7F50] text-white text-xl font-semibold rounded-full shadow-lg hover:bg-[#FF6347] hover:scale-105 transition-all duration-300 z-20">
          Explore Pets 🐶🐱
        </button>
      </div>
    </div>
  );
};

export default Section1;
