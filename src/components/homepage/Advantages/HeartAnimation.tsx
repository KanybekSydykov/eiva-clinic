import { Box } from "@chakra-ui/react";
import React from "react";
import styles from './Heart.module.css'

const HeartAnimation = () => {
  return (
    <Box w={"50px"} h={"50px"}>
      <svg
        width="51"
        height="50"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5007 16.1739C28.0672 16.1739 30.1478 14.1045 30.1478 11.5518C30.1478 8.99905 28.0672 6.92969 25.5007 6.92969C22.9341 6.92969 20.8535 8.99905 20.8535 11.5518C20.8535 14.1045 22.9341 16.1739 25.5007 16.1739Z"
          stroke="#0F5F62"
          strokeWidth="1.9802"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5001 18.4453H21.8228C20.0852 18.4453 18.489 19.4501 17.7818 21.0377L15.5795 25.8407C15.337 26.3632 14.9329 26.8052 14.448 27.1268L8.95224 30.503C7.92179 31.126 7.61872 32.4724 8.26528 33.4772C8.89163 34.4619 10.2049 34.7633 11.2152 34.1604L17.5393 30.3422C18.0445 30.0407 18.4486 29.6187 18.7112 29.0962L20.853 25.0368"
          stroke="#0F5F62"
          strokeWidth="1.9802"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.176 28.1914V31.869C19.176 32.7532 18.7315 33.5771 17.9839 34.0594L13.1145 37.2547C11.5992 38.2595 11.2153 40.3093 12.2861 41.7763C12.8923 42.6003 13.8621 43.0826 14.8724 43.0826H25.48"
          stroke="#0F5F62"
          strokeWidth="1.9802"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.498 18.4453H29.1753C30.913 18.4453 32.5091 19.4501 33.2163 21.0377L35.4187 25.8407C35.6611 26.3632 36.0652 26.8052 36.5502 27.1268L42.0459 30.503C43.0764 31.126 43.3794 32.4724 42.7329 33.4772C42.1065 34.4619 40.7932 34.7633 39.7829 34.1604L33.4588 30.3422C32.9537 30.0407 32.5496 29.6187 32.2869 29.0962L30.1452 25.0368"
          stroke="#0F5F62"
          strokeWidth="1.9802"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.8256 28.1914V31.869C31.8256 32.7532 32.2701 33.5771 33.0177 34.0594L37.8871 37.2547C39.4024 38.2595 39.7863 40.3093 38.7154 41.7763C38.1093 42.6003 37.1395 43.0826 36.1292 43.0826H25.5216H21.8241C20.2885 43.0826 19.0156 41.8366 19.0156 40.2892C19.0156 38.8222 20.1471 37.6164 21.6221 37.516L30.1486 36.9131"
          stroke="#0F5F62"
          strokeWidth="1.9802"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
        className={styles.heart}
          d="M25.4812 33.373C25.4209 33.373 25.3757 33.3562 25.3456 33.3056L23.839 31.6178C23.387 31.1115 23.387 30.2676 23.839 29.7613C24.065 29.5081 24.3512 29.373 24.6676 29.373C24.984 29.373 25.2702 29.5081 25.4962 29.7613C25.7222 29.5081 26.0085 29.373 26.3249 29.373C26.6412 29.373 26.9275 29.5081 27.1535 29.7613C27.3795 30.0144 27.5 30.3351 27.5 30.6895C27.5 31.0271 27.3795 31.3646 27.1535 31.6178L25.6469 33.3056C25.5866 33.3562 25.5264 33.373 25.4812 33.373Z"
          fill="#0F5F62"
        />
      </svg>
    </Box>
  );
};

export default HeartAnimation;
