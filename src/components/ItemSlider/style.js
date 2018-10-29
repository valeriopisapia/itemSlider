import styled from 'styled-components'
import {colors, fonts, breakpoints} from '../../utils/styles'

export const Wrapper = styled.div`
    .settings-icon {
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 99999999999999;
      background: white;
      border-radius: 50%;
      padding: 5px;

      path,
      polygon {
        fill: black;
      }
    }

    .settings {
      background: rgba(0, 0, 0, 0.75);
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 999999999;
      display: flex;
      align-items: center;
      justify-content: center;

      .menu {
        width: 600px;
        height: 350px;
        background: white;

        @media (max-width: 650px) {
          width: 300px;
        }
      }
    }
  }

  .nextArrow,
  .backArrow {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in 0.1s;

    &:hover {
      transition: transform ease-in 0.1s;
      transform: scale(1.1);
    }
  }

  .cool-buttons {
    background: black;
    border: 2px solid white;
  }

  .nextArrow {
    position: absolute;
    top: 50%;
    right: 25px;
    z-index: 999;
    color: #fff;

    img {
      transform: translate(2px, 0);

      &:focus {
        outline: 0;
      }
    }
  }

  .backArrow {
    position: absolute;
    top: 50%;
    left: 25px;
    z-index: 999;
    color: #fff;

    img {
      transform: translate(-2px, 0);

      &:focus {
        outline: 0;
      }
    }
  }

  .dots-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 9999;
    padding: 5px 0;

    .dot {
      background: #222;
      display: inline-block;
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
    }
    .active {
      background: #fff;
    }
  }

  $clr-base: #e0e4fb;
  $clr-blue: #465798;
  $clr-gray: gray;
  $clr-darkred: darkred;

  $transition-time: 0.3s;
  $play-btn-color: $clr-blue;
  $play-btn-size: 32px;

  .slider {
    width: auto;
    height: auto;
    background-color: $clr-gray;
    margin-right: 10px;
    text-align: center;
  }

  .slider__img {
    width: 90%;
    padding: 10px;
    height: auto;
  }

  /* Item Slider Classes */
  .item-slider {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin: auto;
  }

  .item-slider__wrapper {
    position: relative;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
  }

  .item-slider__stage {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    box-sizing: border-box;
    &-item {
      width: 100%;
      height: 100%;
      position: relative;
      display: inline-block;
      vertical-align: top;
      white-space: normal;
      line-height: 0;
      * {
        line-height: initial;
      }
      &.__cloned {
        opacity: 0;
        visibility: hidden;
      }
    }
    &:after {
      content: '.';
      display: block;
      clear: both;
      visibility: hidden;
      line-height: 0;
      height: 0;
    }
  }

  .item-slider__prev-btn,
  .item-slider__next-btn {
    display: inline-block;
    width: 50%;
    padding: 15px 10px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    [data-area] {
      &::after {
        content: attr(data-area);
        position: relative;
      }
    }
  }
  .item-slider__next-btn {
    text-align: right;
    right: 0;
  }
  .item-slider__prev-btn {
    text-align: left;
    left: 0;
  }

  .item-slider__prev-btn-item,
  .item-slider__next-btn-item {
    display: inline-block;
    color: ${colors.blue};
    cursor: pointer;
    &:hover {
      color: $clr-darkred;
    }
    &.__inactive {
      opacity: 0.4;
    }
  }

  .item-slider__play-btn {
    display: inline-block;
    position: relative;
    top: 30px;
    left: 20px;
    &:hover {
      cursor: pointer;
    }
    &-wrapper {
      position: relative;
      background-color: #fff;
      padding: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  .item-slider__play-btn-item {
    cursor: pointer;
    position: absolute;
    background: trasparent;
    width: 32px;
    height: 32px;
    outline: none;
    border: 0;
    &::before,
    &::after {
      content: '';
      width: 0;
      height: 0;
      display: block;
      position: absolute;
      border-style: solid;
      border-color: transparent;
      border-width: 8px 0 8px 15px;
      border-left-color: ${colors.blue};
      transition: all $transition-time linear;
    }
    &::before {
      height: 14px;
      left: 5px;
    }
    &::after {
      left: 18px;
      top: 7px;
    }
    &.__pause {
      &::before,
      &::after {
        border-width: 0 0 0 10px;
        height: 30px;
      }
      &::after {
        left: 18px;
        top: 0;
      }
    }
  }

  .item-slider__dots {
    margin: 30px 0 5px;
    text-align: center;
    list-style: none;
    padding: 0;
    &-item {
      display: inline-block;
      width: 8px;
      height: 8px;
      cursor: pointer;
      border-radius: 50%;
      background-color: ${colors.black};
      &:not(:last-child) {
        margin-right: 15px;
      }
      &:hover,
      &.__active {
        background-color: ${colors.red};
      }
    }
  }

  .item-slider__slide-info {
    display: inline-block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 5px 10px;
    color: $clr-blue;
    border-radius: 5px;
    background-color: rgba($clr-base, 0.6);
    &-item {
      line-height: 0;
      vertical-align: middle;
    }
  }

  .item-slider .animated {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .item-slider .animated-out {
    z-index: 1;
  }

  .item-slider .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`
