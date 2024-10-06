import { cn } from '@/lib/utils'
import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

const BaseIcon: React.FC<React.SVGProps<SVGSVGElement> & IconProps> = ({
  className,
  size = 50,
  children,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      className={cn(
        'z-30 cursor-text stroke-neutral-800 transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </svg>
  )
}

export const TelegramIcon: React.FC<IconProps> = (props) => (
  <BaseIcon viewBox="0 0 50 50" {...props}>
    <path
      d="M17.1876 26.3478L34.7462 41.7971C34.9491 41.9767 35.1953 42.1005 35.4605 42.1562C35.7257 42.212 36.0008 42.1978 36.2589 42.115C36.517 42.0323 36.7491 41.8838 36.9325 41.6843C37.1158 41.4847 37.2441 41.2409 37.3048 40.9767L44.6485 8.90643C44.7101 8.63024 44.6955 8.34251 44.6063 8.07396C44.5172 7.80541 44.3567 7.56612 44.1422 7.38163C43.9276 7.19715 43.6669 7.07439 43.3881 7.02647C43.1092 6.97855 42.8225 7.00727 42.5587 7.10955L6.50399 21.2697C5.05868 21.8361 5.25399 23.9455 6.77743 24.258L17.1876 26.3478Z"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.1875 26.3477L43.7695 7.14844"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.957 34.0625L19.8633 40.1563C19.6459 40.377 19.3678 40.5281 19.0643 40.5905C18.7608 40.6528 18.4456 40.6235 18.1588 40.5062C17.872 40.389 17.6265 40.1891 17.4536 39.9321C17.2806 39.675 17.188 39.3723 17.1875 39.0625V26.3477"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export const GmailIcon: React.FC<IconProps> = (props) => (
  <BaseIcon viewBox="0 0 50 50" {...props}>
    <path
      d="M6.25 10.9375H43.75V37.5C43.75 37.9144 43.5854 38.3118 43.2924 38.6049C42.9993 38.8979 42.6019 39.0625 42.1875 39.0625H7.8125C7.3981 39.0625 7.00067 38.8979 6.70765 38.6049C6.41462 38.3118 6.25 37.9144 6.25 37.5V10.9375Z"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43.75 10.9375L25 28.125L6.25 10.9375"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export const InstagramIcon: React.FC<IconProps> = (props) => (
  <BaseIcon viewBox="0 0 50 50" {...props}>
    <path
      d="M25 32.8125C29.3147 32.8125 32.8125 29.3147 32.8125 25C32.8125 20.6853 29.3147 17.1875 25 17.1875C20.6853 17.1875 17.1875 20.6853 17.1875 25C17.1875 29.3147 20.6853 32.8125 25 32.8125Z"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
    <path
      d="M33.5938 7.03125H16.4062C11.2286 7.03125 7.03125 11.2286 7.03125 16.4062V33.5938C7.03125 38.7714 11.2286 42.9688 16.4062 42.9688H33.5938C38.7714 42.9688 42.9688 38.7714 42.9688 33.5938V16.4062C42.9688 11.2286 38.7714 7.03125 33.5938 7.03125Z"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.1562 17.1875C36.4507 17.1875 37.5 16.1382 37.5 14.8438C37.5 13.5493 36.4507 12.5 35.1562 12.5C33.8618 12.5 32.8125 13.5493 32.8125 14.8438C32.8125 16.1382 33.8618 17.1875 35.1562 17.1875Z"
      fill="black"
    />
  </BaseIcon>
)

export const LinkedInIcon: React.FC<IconProps> = (props) => (
  <BaseIcon viewBox="0 0 50 50" {...props}>
    <path
      d="M41.4062 7.03125H8.59375C7.73081 7.03125 7.03125 7.73081 7.03125 8.59375V41.4062C7.03125 42.2692 7.73081 42.9688 8.59375 42.9688H41.4062C42.2692 42.9688 42.9688 42.2692 42.9688 41.4062V8.59375C42.9688 7.73081 42.2692 7.03125 41.4062 7.03125Z"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M23.4375 21.875V34.375" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.1875 21.875V34.375" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M23.4375 27.3438C23.4375 25.8933 24.0137 24.5023 25.0393 23.4768C26.0648 22.4512 27.4558 21.875 28.9062 21.875C30.3567 21.875 31.7477 22.4512 32.7732 23.4768C33.7988 24.5023 34.375 25.8933 34.375 27.3438V34.375"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.1875 17.9688C18.4819 17.9688 19.5312 16.9194 19.5312 15.625C19.5312 14.3306 18.4819 13.2812 17.1875 13.2812C15.8931 13.2812 14.8438 14.3306 14.8438 15.625C14.8438 16.9194 15.8931 17.9688 17.1875 17.9688Z"
      fill="black"
    />
  </BaseIcon>
)
