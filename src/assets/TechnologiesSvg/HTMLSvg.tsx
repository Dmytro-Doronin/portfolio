import { Ref, SVGProps, forwardRef, memo } from 'react'

const HTMLSvg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    return (
        <svg width="80"
             height="80"
             viewBox="0 0 80 80"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             ref={ref}
             {...props}
        >
            <path d="M14.7542 68.0025L9.13672 5H70.8617L65.2367 67.9925L39.9617 75L14.7542 68.0025Z"
                  fill="#E44F26"/>
            <path d="M40 69.6448L60.425 63.9823L65.23 10.1523H40V69.6448Z" fill="#F1662A"/>
            <path
                d="M40 33.5179H29.775L29.07 25.6054H40V17.8779H20.625L20.81 19.9529L22.7075 41.2454H40V33.5179V33.5179ZM40 53.5854L39.965 53.5954L31.36 51.2729L30.81 45.1104H23.0525L24.135 57.2404L39.965 61.6354L40 61.6254V53.5854Z"
                fill="#EBEBEB"/>
            <path
                d="M39.9727 33.5179V41.2454H49.4877L48.5927 51.2679L39.9727 53.5929V61.6329L55.8152 57.2404L55.9302 55.9354L57.7452 35.5929L57.9352 33.5179H39.9727V33.5179ZM39.9727 17.8779V25.6054H58.6377L58.7927 23.8704L59.1452 19.9529L59.3302 17.8779H39.9727V17.8779Z"
                fill="white"/>
        </svg>
    );
};
const ForwardRef = forwardRef(HTMLSvg)

export default memo(ForwardRef)