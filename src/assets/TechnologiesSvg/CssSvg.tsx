import { Ref, SVGProps, forwardRef, memo } from 'react'

const CssSvg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="80"
             height="80"
             viewBox="0 0 80 80"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             {...props}
            ref={ref}
        >
            <path d="M14.7556 68.0025L9.14062 5H70.8606L65.2381 67.9925L39.9631 75L14.7556 68.0025Z"
                  fill="#1572B6" />
            <path d="M40 69.6448L60.425 63.9823L65.23 10.1523H40V69.6448Z" fill="#33A9DC" />
            <path
                d="M40 32.9779H50.225L50.93 25.0654H40V17.3379H59.375L59.19 19.4104L57.2925 40.7054H40V32.9779V32.9779Z"
                fill="white" />
            <path
                d="M40.0471 53.0449L40.0121 53.0549L31.4071 50.7299L30.8571 44.5674H23.0996L24.1821 56.6999L40.0096 61.0949L40.0471 61.0849V53.0449V53.0449Z"
                fill="#EBEBEB" />
            <path
                d="M49.567 40.3779L48.637 50.7254L40.0195 53.0504V61.0904L55.8595 56.7004L55.977 55.3954L57.3195 40.3779H49.567V40.3779Z"
                fill="white" />
            <path
                d="M40.0274 17.3379V25.0654H21.3624L21.2074 23.3279L20.8549 19.4104L20.6699 17.3379H40.0274V17.3379ZM39.9999 32.9779V40.7054H31.5024L31.3474 38.9679L30.9974 35.0504L30.8124 32.9779H39.9999V32.9779Z"
                fill="#EBEBEB" />
        </svg>
    );
};
const ForwardRef = forwardRef(CssSvg)

export default memo(ForwardRef)