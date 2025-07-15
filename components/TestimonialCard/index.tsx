'use client';

import React from 'react';
import Image from 'next/image';
import { IoStarSharp } from 'react-icons/io5';
import styles from './TestimonialCard.module.css';

type Props = {
  name: string;
  title: string;
  avatar: string;
  image: string;
  message: string;
};

const TestimonialCard = ({ name, title, avatar, image, message }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt="Room background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarImage}>
            <Image
              src={avatar}
              alt={name}
              width={60}
              height={60}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.title}>{title}</p>
        <p className={styles.message}>“{message}”</p>
        <div className={styles.stars}>
          <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
