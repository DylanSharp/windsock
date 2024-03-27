import {SVGProps} from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (

    <svg
        viewBox="-500 0 1200 1200"
        width={44}
        height={44}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fill={"#b9b9b9"}
            d="m428.76 333.52c-0.80469-5.6055-4.5469-10.332-9.793-12.422-3.0586-1.2227-6.3242-1.3086-9.4219-0.60156l-167.86-110.89v-4.6445c0-11.629-9.4219-21.047-21.047-21.047-11.641 0-21.07 9.4336-21.07 21.047v26.258l-77.23 168.52c-3.2539 0.94922-6.2148 2.7969-8.293 5.5938-3.3359 4.4766-4.0781 10.402-1.9219 15.551l87.445 208.91v483.79c0 11.629 9.4336 21.059 21.07 21.059 11.629 0 21.047-9.4336 21.047-21.059v-383.17l126.8 302.94c0.78125 1.8945 1.9453 3.625 3.3945 5.0742 0.13281 0.12109 0.25391 0.25391 0.38281 0.35938 1.2852 1.2227 32.293 29.484 86.746 14.461 55.512-15.312 63.324-55.727 63.637-57.434 0.27734-1.6562 0.3125-3.3594 0.085938-5.0273zm-118.12 479.79-79.645-190.24c19.691-0.16797 55.754-2.7461 104.22-16.117 47.605-13.129 78.66-28.812 95.219-38.688l29.172 204c-5.8672 4.0547-28.547 18.406-70.801 30.07-41.984 11.57-70.16 11.355-78.164 10.973zm-45.492-449.61c42.371-11.688 75.805-15.672 97.738-16.859-21.109 10.211-50.797 22.262-89.902 33.047-39.887 11.016-72.852 16.008-97.223 18.191 18.695-9.8867 48.105-22.988 89.387-34.379zm98.086-48.551c-23.902 1.1523-60.254 5.3398-106.49 18.109-5.1953 1.4414-10.211 2.8906-15.059 4.3672v-102.78zm-163.67 37.234c-16.969 6.793-30.59 13.379-41.09 19.055l41.09-89.652zm81.793 57.938c58.43-16.117 97.559-35.16 119.63-47.902l24.504 171.39c-0.046875 0.046875-0.12109 0.046875-0.17969 0.097656-0.30078 0.23828-31.355 24.086-98.508 42.613-66.301 18.266-107.4 14.773-109.2 14.594l-66.949-159.94c26.148-0.53125 71.219-4.4336 130.7-20.859zm169.29 612.48c-29.93 8.2578-48.383-1.2969-54.613-5.4844l-72.191-172.44c15.863-0.58984 41.027-3.1797 73.344-12.086 31.598-8.7344 53.734-19.008 67.262-26.508l26.566 185.76c-1.9805 5.5469-10.402 22.488-40.367 30.758z"/>
    </svg>
)
export default SvgComponent