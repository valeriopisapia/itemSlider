# Item Slider

### Demo
https://itemsliderdl.firebaseapp.com

### Get started!
```
git clone
cd itemSlider
npm i
```

### Start the dev server:
```

npm run start

```

### Build:
```

npm run build

```

## Codebase overview 
```
/
├─ public/
|  ├─ dist/
|  |  ├─ bundle.css           # CSS that's generated from SASS
|  |  ├─ bundle.js            # Contains scripts of components & vendor(s).
|  ├─ index.html              # Contains root element to mount your app.
└─ src/
   ├─ components/             # Create components here
   |  ├─ ItemSlider/
   |─ containers/             # Containers bridge Components with the State.
   |  ├─ Gallery.js
   ├─ styles/                 # All styling goes here.
   |  ├─ main.scss
   ├─ services/               # Services
   |  ├─ api.js
   |  ├─ fetch.js
   ├─ utils/                  # Helper methods
   |  ├─ config.js
   |  ├─ styles.js
   ├─ App.js                  # Include your main component(s).
   ├─ index.js                # Passes state to App. Renders markup to DOM.
```

---
# Widgets

## ItemSlider widget
ItemSlider has the following features:

### Advanced configuration

* Infinite loop
* FadeOut animation
* AutoPlay mode
* Mobile friendly
* Responsive design
* Swipe to slide
* Start index
* Slide to index
* RTL
* Keyboard navigation
* Touch and Drag support
* Custom rendered slides
* Custom animation duration
* Multiple items in the slide
* Show / hide anything (indicators, arrows, slides indexes) 

#### Quick Start
```
TO DO
```

#### Props
*  `items` : Array, default `[]` - gallery items,  preferable to use this property instead of ` children `

* `duration` : Number, default  `250` - Duration of slides transition (milliseconds)

* `responsive` : Object, default `{}` - Number of items in the slide

  ```js
    {
        0: {
            items: 1
        },
        1024: {
            items: 3
        }
    }
  ```

* `buttonsDisabled` : Boolean, `false` - Disable buttons control

* `dotsDisabled` : Boolean, `false` - Disable dots navigation

* `startIndex` : Number, `0` - The starting index of the carousel

* `slideToIndex` : Number, `0` - Sets the carousel at the specified position

* `swipeDisabled` : Boolean, default `false` - Disable swipe handlers

* `mouseDragEnabled` : Boolean, default `false` - Enable mouse drag animation

* `infinite` : Boolean, default `true` - Disable infinite mode

* `fadeOutAnimation` : Boolean, `false` - Enable fadeout animation. Fired when 1 item is in the slide

* `keysControlDisabled` :  Boolean, default `false` - Disable keys controls (left, right, space)

* `playButtonEnabled` :  Boolean, default `false` - Disable play/pause button

* `autoPlay` : Boolean, default `false` - Set auto play mode

* `autoPlayInterval` : Number, default  `250` - Interval of auto play animation (milliseconds). If specified, a larger value will be taken from comparing this property and the `duration` one

* `autoPlayDirection` : String, default `ltr` - To run auto play in the left direction specify `rtl` value

* `autoPlayActionDisabled` : Boolean, default `false` - If this property is identified as `true` auto play animation will be stopped after clicking user on any gallery button

* `stopAutoPlayOnHover` : Boolean, default `true` - If this property is identified as `false` auto play animation won't stopped on hover

* `showSlideIndex` : Boolean, default `false` - Show slide info

* `onSlideChange` : Function - Fired when the event object is changing / returns event object

* `onSlideChanged` : Function - Fired when the event object was changed / returns event object

* `preventEventOnTouchMove` : Boolean, default `false` - Prevent the browser's touchmove event when carousel is swiping

---
