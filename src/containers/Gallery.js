import React, { Component } from "react";
import { Wrapper } from './style'
import ItemSlider from '../components/ItemSlider/ItemSlider';
import Slide from '../components/ItemSlider/Slide';
import Switch from "react-switch";
import {
  Input
} from '@material-ui/core';

export default class Gallery extends Component {
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 }
  }

  constructor() {
    super();
    this.state = {
      autoPlay: false,
      fadeOutAnimation: true,
      mouseDragEnabled: true,
      playButtonEnabled: false,
      autoPlayActionDisabled: true,
      dotsDisabled: true,
      duration: '400',
      autoPlayInterval: '2000',
      startIndex: '1',
      autoPlayDirection: true,
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  onSlideChange (e) {
    console.log('Item`s position during a change: ', e.item)
    console.log('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged (e) {
    console.log('Item`s position after changes: ', e.item)
    console.log('Slide`s position after changes: ', e.slide)
  }

  galleryItems (items = []) {
    items = [
      {
        image: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&h=350',
        cover: null,
        price: '100€',
        description: 'Description 1',
        name: 'Test Article 1'
      },
      {
        image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res60/215000/215877-Wenatchee-Lake-Chelan.jpg',
        cover: null,
        price: '100€',
        description: 'Description 2',
        name: 'Test Article 2'
      },
      {
        image: 'https://uploads-ssl.webflow.com/56e1b4d62ed664c311e125b3/57bb183fff90538c6e6af4f2_6813453-the-rocky-mountains.jpg',
        cover: null,
        price: '100€',
        description: 'Description 3',
        name: 'Test Article 3'
      }
    ]
    return items.map((image, i) => <Slide key={i} item={image} />)
  }

  handleChange (checked, event, id) {
    if (id === 'autoplay') {
      this.setState({ autoPlay: checked });
    }
    if (id === 'fadeOutAnimation') {
      this.setState({ fadeOutAnimation: checked });
    }
    if (id === 'mouseDragEnabled') {
      this.setState({ mouseDragEnabled: checked });
    }
    if (id === 'playButtonEnabled') {
      this.setState({ playButtonEnabled: checked });
    }
    if (id === 'autoPlayActionDisabled') {
      this.setState({ autoPlayActionDisabled: checked });
    }
    if (id === 'dotsDisabled') {
      this.setState({ dotsDisabled: checked });
    }
    if (id === 'autoPlayDirection') {
      this.setState({ autoPlayDirection: checked });
    }
  }

  handleChangeField (target) {
    if (target.id === 'autoPlayInterval') {
      this.setState({ autoPlayInterval: target.value });
    }
  }

  render () {
    const items = this.galleryItems(this.state.items);
    return (
      <Wrapper>
        <div className="div-select">
          <img className="logo_image" src="http://www.dreaming-lab.com/blog/wp-content/uploads/2017/08/logo.png" alt="Logo"></img>
        </div>
        <div className="div-select">
          <h4>Configure your Carousel</h4>
        </div>
        <div className="div-select">
          <div htmlFor="autoplay">
            <span className="div-select__span">Auto Play</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.autoPlay}
              id="autoplay"
            />
          </div>
        </div>
        <div className="div-select">
          <span className="div-select__span">Auto Play Interval</span>
          <Input
            type="number"
            id="autoPlayInterval"
            onChange={event => this.handleChangeField(event.target)}
            value={this.state.autoPlayInterval}></Input>
        </div>
        <div className="div-select">
          <div htmlFor="fadeOutAnimation">
            <span className="div-select__span">Fade Out Animation</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.fadeOutAnimation}
              id="fadeOutAnimation"
            />
          </div>
        </div>
        <div className="div-select">
          <div htmlFor="autoplay">
            <span className="div-select__span">Mouse Drag Enabled</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.mouseDragEnabled}
              id="mouseDragEnabled"
            />
          </div>
        </div>
        <div className="div-select">
          <div htmlFor="playButtonEnabled">
            <span className="div-select__span">Play Button Enabled</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.playButtonEnabled}
              id="playButtonEnabled"
            />
          </div>
        </div>
        <div className="div-select">
          <div htmlFor="dotsDisabled">
            <span className="div-select__span">Dots Disabled</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.dotsDisabled}
              id="dotsDisabled"
            />
          </div>
        </div>
        <div className="div-select">
          <div htmlFor="dotsDisabled">
            <span className="div-select__span">Auto Play Direction - Left to Right</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.autoPlayDirection}
              id="autoPlayDirection"
            />
          </div>
        </div>
        <div className="div-select">
          <ItemSlider
            items={items}
            duration={parseInt(this.state.duration)}
            autoPlay={this.state.autoPlay}
            startIndex={parseInt(this.state.startIndex)}
            fadeOutAnimation={this.state.fadeOutAnimation}
            mouseDragEnabled={this.state.mouseDragEnabled}
            playButtonEnabled={this.state.playButtonEnabled}
            autoPlayInterval={parseInt(this.state.autoPlayInterval)}
            autoPlayDirection={this.state.autoPlayDirection ? 'ltr' : 'rtl'}
            responsive={this.responsive}
            autoPlayActionDisabled={this.state.autoPlayActionDisabled}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
            dotsDisabled={this.state.dotsDisabled}
          />
        </div>
      </Wrapper>
    )
  }
}
