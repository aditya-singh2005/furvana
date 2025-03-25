import React from 'react'
import InfiniteScroll from './InfiniteScroll';


const items = [
  { content: "🐾 Welcome, Future Pet Parent! Ready to adopt your furry bestie? 🎉" },
  { content: "🐶 Step 1: Pick your perfect pet! Big, small, fluffy, or goofy? 🧐" },
  { content: "🥎 Step 2: Play time! Bond through fetch, puzzles, and belly rubs. 🎾" },
  { content: "🍖 Step 3: Feed wisely! Every pet has its fave treats. Choose right! 😋" },
  { content: "🏡 Step 4: Customize their home! Cozy bed, cool toys, happy pet! 🏠" },
  { content: "🩺 Step 5: Vet check! Keep your buddy healthy & unlock wellness rewards! 🏆" },
  { content: "🎯 Daily Challenge: Walk, train, and care to earn 'Furvana Points'! 🔥" },
  { content: "🎀 Style Your Pet: Dress ‘em up in cute accessories! 🎩✨" },
  { content: "🏅 Unlock Achievements: Super Trainer, Snuggle Master & more! 🚀" },
  { content: "📸 Pet Pics: Snap & share your pet’s best moments with the community! 🌍" },
  { content: "🎉 Surprise Events: Exclusive pets, rare items & leaderboard prizes await! 🎊" },
  { content: "🐾 Start your pet journey now & become the ultimate pet guardian! 🚀" },
];


const Section3 = () => {
  return (
    <div>
        <div className='h-screen w-1/2'>
        <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.2}
            autoplayDirection="down"
            pauseOnHover={true}
        />
        </div>
    </div>
  )
}

export default Section3;