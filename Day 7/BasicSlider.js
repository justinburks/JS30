function Slider(slider) {
  if(!(slider instanceof Element)) {
      throw new Error('No Slider passed in');
  }
  // create some variables for working with the slider
  let current;
  let prev;
  let next;
  // selcect the elements needed for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

function startSlider() {
    current = slider.querySelector('.current') ||
              slides.firstElementChild;
              console.log(current);
    prev = current.previousElementSibling ||
           slides.lastElementChild;
    next = current.nextElementSibling || 
           slides.firstElementChild;
        }
    
function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
        }
        
function move(direction) {
    //first strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];

    [prev, current, next].forEach(el => el.classList.remove(...classesToRemove));

    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if(direction === 'back') {
        // make a new array of the new values, and destructure them over and into the prev, current, and next variables
     [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current]
        // get the prev slide if none, get the entire slide for wrapping
    } else {
        [prev, current, next] = [current, next, next.nextElementSibling || slides.firstChild];
        // get the next slide or wrap around to first
    }
    applyClasses();
}

startSlider();
applyClasses();

    // Event listeners
    prevButton.addEventListener('click', () => move('back'))
    nextButton.addEventListener('click', move)
    }

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
