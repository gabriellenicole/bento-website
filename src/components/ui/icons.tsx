import { cn } from '@/lib/utils'
import React from 'react'

interface IconProps {
  className?: string
  size?: number
  onClick?: () => void
}

const BaseIcon: React.FC<React.SVGProps<SVGSVGElement> & IconProps> = ({
  className,
  size = 50,
  children,
  onClick,
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
      onClick={onClick}
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

export const SmileyIcon: React.FC<IconProps> = (props) => (
  <BaseIcon
    viewBox="0 0 77 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="77"
    height="77"
    {...props}
  >
    <path
      d="M38.1056 66.9043C53.8895 66.9043 66.6848 54.1089 66.6848 38.3251C66.6848 22.5412 53.8895 9.74585 38.1056 9.74585C22.3217 9.74585 9.52637 22.5412 9.52637 38.3251C9.52637 54.1089 22.3217 66.9043 38.1056 66.9043Z"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.3883 35.9435C29.3613 35.9435 30.9607 34.3441 30.9607 32.3711C30.9607 30.3981 29.3613 28.7987 27.3883 28.7987C25.4153 28.7987 23.8159 30.3981 23.8159 32.3711C23.8159 34.3441 25.4153 35.9435 27.3883 35.9435Z"
      fill="white"
    />
    <path
      d="M48.8229 35.9435C50.7959 35.9435 52.3953 34.3441 52.3953 32.3711C52.3953 30.3981 50.7959 28.7987 48.8229 28.7987C46.8499 28.7987 45.2505 30.3981 45.2505 32.3711C45.2505 34.3441 46.8499 35.9435 48.8229 35.9435Z"
      fill="white"
    />
    <path
      d="M50.4899 45.47C49.2308 47.639 47.4242 49.4393 45.2508 50.6908C43.0774 51.9423 40.6135 52.601 38.1055 52.601C35.5976 52.601 33.1336 51.9423 30.9602 50.6908C28.7868 49.4393 26.9802 47.639 25.7212 45.47"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement> & IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export const FigmaIcon: React.FC<React.SVGProps<SVGSVGElement> & IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}
