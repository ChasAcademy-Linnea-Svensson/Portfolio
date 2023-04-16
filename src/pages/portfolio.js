import ProjectItem from '@/components/projectItem';
import SectionContainer from '@/components/sectionContainer';

export default function Portfolio() {
  return (
    <SectionContainer>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-6 p-10'>
        <ProjectItem
          img='/meowmory.png'
          alt='memory game with cats'
          title='Meowmory'
          madeIn='Vanilla Javascript'
          description='Classic memory game with cat pictures, one of the first games I made for a workshop in school.'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Meowmory'
          url2='https://meowmory.vercel.app/'
          cardBg='secondary'
        />
        <ProjectItem
          img='/hangedmeow.png'
          alt='hangedman game with cats'
          title='Hangedman'
          madeIn='Vanilla Javascript'
          description='The hanged man game, help the cat get the fish before someone else eats it! A game I made in my spare time.'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Hanged-Fish'
          url2='https://hanged-fish.vercel.app/'
          cardBg='secondary'
        />
        <ProjectItem
          img='/blackjack.png'
          alt='blackjack game'
          title='Blackjack'
          madeIn='Vanilla Javascript'
          description='A blackjack game made for my final assignment in vanilla javascript. Game works better locally for now due to too long picture render time. Please download from github and try it out'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Blackjack-Vanilla-Javascript'
          url2='https://blackjack-vanilla-javascript.vercel.app/'
          cardBg='secondary'
        />
        <ProjectItem
          img='/quiz.png'
          alt='quiz game'
          title='Quiz game'
          madeIn='React'
          description='Final school-assignment in React. A quiz game where you add questions yourself in the admin tab and compete with your friends to set the highest score'
          url='https://github.com/ChasAcademy-Linnea-Svensson/Quiz-with-Redux'
          url2='https://quiz-with-redux.vercel.app/'
          cardBg='secondary'
        />
      </div>
    </SectionContainer>
  );
}