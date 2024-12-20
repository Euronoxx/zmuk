"use client"
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import HeadBar from './HeadBar';

function Homebanner() {
  const directionButtons = (direction) => {
  return (
      <span
        aria-hidden="true"
        className={direction === "Next" ? "button-next" : "button-prev"}
      >
        {direction}
      </span>
    );
  };
  return (
    <>
    <HeadBar text={<>Enjoy Amazing SIM Only Deals From the Animal <span className="txtred">&amp;</span> Music Loving Network!</>} />
    <div>
      <Carousel nextIcon={directionButtons(<i class="bi bi-arrow-right-circle carousel-next-icon"></i>)} prevIcon={directionButtons(<i class="bi bi-arrow-left-circle carousel-prev-btn"></i>)}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner-img-1.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="btnbox">
                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                <Link href="/limited-offers" className="wh">Find out more</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner-img-2.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="btnbox">
                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                <Link href="/limited-offers" className="wh">Find out more</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner-img-3.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="btnbox">
                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                <Link href="/limited-offers" className="wh">Find out more</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/slide-4.png"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <div className="btnbox">
                <Link href="#" className="gr">View Detail</Link>
                <Link href="#" className="wh">Buy Now</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/slide-5.webp"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <div className="btnbox">
                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                <Link href="/limited-offers" className="wh">Find out more</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/slide-6.webp"
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <div className="btnbox">
                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                <Link href="/limited-offers" className="wh">Find out more</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/slide-7.webp"
            alt="Seventh slide"
          />
          <Carousel.Caption>
            <div className="btnbox">
                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                <Link href="/limited-offers" className="wh">Find out more</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  );
}
export default Homebanner;