import styled from 'styled-components'
import { colors, fonts, breakpoints } from '../utils/styles'

export const Wrapper = styled.div`
  max-width: 100%;
  margin: auto;

  .group_title {
    font-style: normal;
    margin-top: 0;
  }

  .logo_image {
    max-height: 100px;
  }

  .btn {
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    font-style: normal;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 1.6px;
    position: relative;
    background-color: rgb(230, 2, 81);
    padding: 0.8em 2.2em;
    overflow: hidden;
    color: ${colors.white}
  }

  .div-select {
    position: relative;
    float: left;
    width: 100%;
    margin-bottom: 20px;
  }

  .div-select__span {
    font-size: 28px;
    padding: 10px;
  }

  .item-slider {
    .slider {
      margin: 0 3%;
      .slider__content {
        width: auto;
        height: 250px;
        border-radius: 35px;
        overflow: hidden;
        position: relative;
        background: ${colors.white};
        .slider__img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .item-slider__slide-info {
          background: rgba(255, 255, 255, 0.9);
          min-height: 25px;
          width: 100%;
          padding: 15px 0;
          z-index: 1000;
          .item-slider__slide-price {
            font-family: ${fonts.titleFont};
            font-size: 22px;
            line-height: 25px;
            text-align: right;
            margin-right: 20px;
            color: ${colors.red};
            overflow: hidden;
            height: 25px;
            transition: 0.5s all ease;
          }
          .item-slider__slide-descr {
            padding-left: 10px;
            padding-right: 10px;
            font-size: 14px;
            line-height: 19px;
            text-align: left;
            transform: translate(0, 100%);
            margin-bottom: -100%;
            overflow: hidden;
            transition: 0.4s all ease;
            color: ${colors.red};
          }
        }
        &:hover {
          .item-slider__slide-info {
            .item-slider__slide-price {
              height: 0;
            }
            .item-slider__slide-descr {
              transform: translate(0, 0);
              margin-bottom: 0;
              color: ${colors.red};
            }
          }
        }
      }
      .item-slider__slide-title {
        margin-top: 10px;
        font-family: ${fonts.titleFont};
        font-size: 22px;
        line-height: 25px;
        color: ${colors.blue};
      }
    } /* slider */
    .item-slider__play-btn-wrapper {
      background-color: red;
    }

    .item-slider__prev-btn,
    .item-slider__next-btn {
      width: 50px;
      height: 50px;
      margin: 0;
      padding: 0;
      top: 35%;
      .item-slider__prev-btn-item,
      .item-slider__next-btn-item {
        color: ${colors.blue};
        &:hover {
          color: ${colors.red} !important;
        }
      }
    }
    .item-slider__prev-btn {
      margin-left: -6px;
      .item-slider__prev-btn-wrapper {
        .item-slider__prev-btn-item {
          margin: 0;
          span {
            &::after {
              content: '\\e95B';
              font-family: 'icons';
              font-size: 35px;
              line-height: 50px;
              text-align: center;
            }
          }
        }
      }
    }
    .item-slider__next-btn {
      margin-right: -6px;
      .item-slider__next-btn-wrapper {
        .item-slider__next-btn-item {
          margin: 0;
          span {
            &::after {
              content: '\\e958';
              font-family: 'icons';
              font-size: 35px;
              line-height: 50px;
              text-align: center;
            }
          }
        }
      }
    }
  } /* item-slider */

  @media (${breakpoints.medium}) {
    .item-slider {
      .item-slider__prev-btn {
        margin-left: -25px;
      }
      .item-slider__next-btn {
        margin-right: -25px;
      }
    }
  }
  @media (${breakpoints.small}) {
    .item-slider {
      .item-slider__prev-btn {
        margin-left: -20px;
      }
      .item-slider__next-btn {
        margin-right: -20px;
      }
    }
  }
`
