export default function Colorbrnad(props) {
    const {size = 24, name } = props;
  
    // Definición de tamaños
    const sizeMap = {
      s: 16, // Tamaño pequeño
      m: 24, // Tamaño mediano
      l: 32, // Tamaño grande
      xl: 48, // Tamaño extra grande
    };
    const resolvedSize = sizeMap[size] || size;
    // Iconos
    const icons ={
        SAP: (
            <svg width={resolvedSize} height={resolvedSize} viewBox="0 0 24 24">
                <path d="M0 6.22079V18.2208H12.1152L24 6.22079H0ZM14.6496 13.6128H13.8528V15.9072H10.3776L10.0032 14.8128C9.6288 14.9376 9.2544 15.0048 8.784 15.0048C8.3136 15.0048 7.8912 14.928 7.5168 14.8032L7.1904 15.9072H5.0304L5.2608 15.2736C5.2608 15.2736 5.2128 15.3216 5.1648 15.3504C4.6464 15.7824 3.9456 16.0224 3.1488 16.0416H3.0048C2.064 16.0416 1.1232 15.7728 0.3264 15.3216L1.0752 13.8528C1.872 14.3232 2.3424 14.4288 3.0048 14.4192C3.3792 14.4192 3.6192 14.3424 3.8016 14.1792C3.8976 14.0736 3.9456 13.9488 3.9456 13.8048C3.9456 13.4208 3.4272 13.248 2.7744 13.0368C2.208 12.8736 1.6512 12.6432 1.1328 12.2976C0.6144 11.8848 0.336 11.3664 0.336 10.6272C0.336 10.0992 0.5664 9.60959 0.9024 9.23519C1.4208 8.68799 2.2656 8.36159 3.3024 8.36159C4.1472 8.36159 5.184 8.61119 5.9808 9.00479L5.136 10.4544C4.2912 10.0512 3.8688 10.0032 3.3984 9.98399C2.6976 9.94559 2.3616 10.2048 2.3616 10.4736C2.3136 10.8096 3.024 11.1168 3.6288 11.3184C4.6176 11.6256 5.8368 12.0384 6.0288 13.2384L7.8144 8.48639H9.8304L11.8944 14.16V8.48639H14.2464C16.5504 8.48639 17.5776 9.30239 17.5776 11.0688C17.5776 12.6624 16.4928 13.6128 14.6688 13.6128H14.6496ZM14.3712 10.0416H13.8528V11.9712H14.3712C15.072 11.9712 15.6384 11.7408 15.6384 11.0016C15.6384 10.2624 15.072 10.0512 14.3712 10.0512V10.0416ZM8.0352 13.2C8.2656 13.2864 8.5056 13.3344 8.784 13.3344C9.0624 13.3344 9.3024 13.2864 9.5328 13.2096L8.784 10.8096L8.0352 13.2Z" fill="url(#paint0_linear_1590_12074)"/>
                <defs>
                    <linearGradient id="paint0_linear_1590_12074" x1="12" y1="6.22079" x2="12" y2="18.2208" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00A8ED"/>
                        <stop offset="1" stop-color="#085EB2"/>
                    </linearGradient>
                </defs>
            </svg>
          ),AWS: (
            <svg width={resolvedSize} height={resolvedSize} viewBox="0 0 25 24">
                <g>
                    <path d="M7.26814 10.08C7.26814 10.368 7.29693 10.5984 7.35453 10.7712C7.42173 10.944 7.49853 11.1264 7.61373 11.328C7.65213 11.3856 7.67133 11.4528 7.67133 11.5104C7.67133 11.5872 7.62333 11.664 7.51774 11.7408L7.01853 12.0672C6.95133 12.1152 6.87454 12.1344 6.80733 12.1344C6.73054 12.1344 6.64413 12.096 6.56734 12.0288C6.45214 11.9136 6.35613 11.7888 6.27934 11.664C6.20254 11.5296 6.11614 11.3856 6.02974 11.2032C5.40574 11.9232 4.62813 12.2784 3.68733 12.2784C3.01533 12.2784 2.47774 12.096 2.09374 11.7216C1.70014 11.3472 1.49854 10.848 1.49854 10.224C1.49854 9.56159 1.73854 9.02399 2.22814 8.62079C2.71774 8.21759 3.36093 8.01599 4.18653 8.01599C4.45533 8.01599 4.73373 8.03519 5.03133 8.07359C5.32893 8.11199 5.62653 8.17919 5.95293 8.24639V7.67999C5.95293 7.08479 5.82814 6.67199 5.57854 6.43199C5.31933 6.19199 4.88733 6.07679 4.27293 6.07679C3.99453 6.07679 3.70653 6.10559 3.40893 6.18239C3.11133 6.24959 2.82333 6.33599 2.54493 6.45119C2.42014 6.50879 2.32414 6.53759 2.26654 6.55679C2.20894 6.57599 2.17054 6.57599 2.14174 6.57599C2.02654 6.57599 1.97854 6.49919 1.97854 6.33599V5.95199C1.97854 5.82719 1.99774 5.73119 2.03614 5.68319C2.07454 5.62559 2.15134 5.57759 2.25694 5.51999C2.53534 5.37599 2.87134 5.26079 3.26494 5.17439C3.65854 5.06879 4.07133 5.03039 4.51293 5.03039C5.46333 5.03039 6.15453 5.24159 6.60573 5.66399C7.04733 6.08639 7.26814 6.71999 7.26814 7.58399V10.1088H7.28733L7.26814 10.08ZM4.02333 11.2704C4.28254 11.2704 4.56094 11.2224 4.84894 11.1264C5.13694 11.0304 5.39614 10.8576 5.60734 10.6272C5.73214 10.4832 5.82814 10.32 5.87613 10.128C5.92413 9.94559 5.95293 9.71519 5.95293 9.44639V9.11999C5.72253 9.06239 5.47293 9.01439 5.22333 8.98559C4.96413 8.95679 4.72413 8.93759 4.47453 8.93759C3.93693 8.93759 3.55294 9.04319 3.28414 9.24479C3.02494 9.45599 2.89053 9.75359 2.89053 10.1376C2.89053 10.5024 2.98653 10.7808 3.18813 10.9632C3.38013 11.1552 3.65854 11.2512 4.02333 11.2512V11.2704ZM10.4361 12.1056C10.2921 12.1056 10.1961 12.0864 10.1289 12.0288C10.0617 11.9808 10.0137 11.8752 9.96573 11.7216L8.09373 5.70239C8.04573 5.54879 8.02654 5.44319 8.02654 5.39519C8.02654 5.27039 8.09373 5.20319 8.21853 5.20319H8.99614C9.14974 5.20319 9.25533 5.22239 9.30333 5.27999C9.37053 5.32799 9.41854 5.43359 9.46654 5.58719L10.8105 10.7424L12.0585 5.58719C12.0969 5.43359 12.1449 5.32799 12.2121 5.27999C12.2793 5.23199 12.3849 5.20319 12.5289 5.20319H13.1721C13.3257 5.20319 13.4313 5.22239 13.4889 5.27999C13.5561 5.32799 13.6041 5.43359 13.6425 5.58719L14.9001 10.8L16.2825 5.58719C16.3305 5.43359 16.3881 5.32799 16.4457 5.27999C16.5129 5.23199 16.6089 5.20319 16.7529 5.20319H17.4921C17.6169 5.20319 17.6937 5.26079 17.6937 5.39519C17.6937 5.43359 17.6937 5.47199 17.6745 5.51999C17.6745 5.56799 17.6457 5.62559 17.6169 5.71199L15.6969 11.7312C15.6489 11.8848 15.5913 11.9904 15.5337 12.0384C15.4665 12.0864 15.3705 12.1152 15.2265 12.1152H14.5353C14.3817 12.1152 14.2761 12.096 14.2185 12.0384C14.1513 11.9808 14.1033 11.8848 14.0649 11.7312L12.8265 6.71039L11.5977 11.7216C11.5593 11.8752 11.5113 11.9808 11.4441 12.0288C11.3769 12.0864 11.2713 12.1056 11.1273 12.1056H10.4361ZM20.6889 12.3168C20.2761 12.3168 19.8633 12.2688 19.4601 12.1728C19.0569 12.0768 18.7497 11.9808 18.5385 11.8656C18.4137 11.7984 18.3273 11.7216 18.2889 11.6448C18.2601 11.5776 18.2409 11.5008 18.2409 11.424V11.0304C18.2409 10.8672 18.3081 10.7904 18.4233 10.7904C18.4713 10.7904 18.5193 10.7904 18.5673 10.8096C18.6153 10.8288 18.6825 10.8576 18.7689 10.8864C19.0377 11.0016 19.3353 11.0976 19.6425 11.1552C19.9593 11.2128 20.2761 11.2512 20.5929 11.2512C21.0921 11.2512 21.4857 11.1648 21.7545 10.992C22.0233 10.8192 22.1673 10.5696 22.1673 10.2528C22.1673 10.032 22.1001 9.85919 21.9561 9.70559C21.8121 9.56159 21.5433 9.42719 21.1497 9.30239L19.9881 8.95679C19.4025 8.77439 18.9705 8.51519 18.7113 8.15999C18.4521 7.81439 18.3081 7.43999 18.3081 7.02719C18.3081 6.70079 18.3753 6.41279 18.5193 6.16319C18.6633 5.91359 18.8553 5.69279 19.0953 5.51999C19.3353 5.33759 19.6041 5.21279 19.9209 5.11679C20.2377 5.02079 20.5737 4.98239 20.9289 4.98239C21.1017 4.98239 21.2841 4.98239 21.4665 5.01119C21.6489 5.03039 21.8217 5.06879 21.9849 5.09759C22.1481 5.13599 22.2921 5.17439 22.4361 5.22239C22.5801 5.27039 22.6953 5.31839 22.7721 5.36639C22.8873 5.42399 22.9641 5.49119 23.0121 5.55839C23.0601 5.61599 23.0793 5.70239 23.0793 5.81759V6.18239C23.0793 6.34559 23.0121 6.43199 22.8969 6.43199C22.8297 6.43199 22.7337 6.40319 22.5897 6.33599C22.1385 6.13439 21.6201 6.02879 21.0537 6.02879C20.6025 6.02879 20.2377 6.09599 19.9881 6.24959C19.7385 6.39359 19.6137 6.62399 19.6137 6.94079C19.6137 7.16159 19.6905 7.34399 19.8537 7.49759C20.0169 7.64159 20.3049 7.79519 20.7273 7.92959L21.8601 8.27519C22.4361 8.45759 22.8489 8.70719 23.0985 9.02399C23.3481 9.34079 23.4633 9.70559 23.4633 10.1184C23.4633 10.4544 23.3961 10.7616 23.2521 11.0208C23.1081 11.2896 22.9161 11.52 22.6665 11.7024C22.4169 11.8944 22.1193 12.0384 21.7833 12.1344C21.4281 12.24 21.0441 12.2976 20.6409 12.2976L20.6889 12.3168Z" fill="#252F3E"/>
                    <path d="M20.2685 14.7784C21.1443 14.6798 22.9607 14.4753 23.2903 14.8896H23.2807C23.6167 15.3024 22.9063 17.04 22.5895 17.808C22.4935 18.0384 22.7047 18.1344 22.9159 17.952C24.3271 16.8 24.6919 14.3904 24.4039 14.0448C24.1159 13.7088 21.6487 13.4112 20.1511 14.4384C19.9207 14.6016 19.9591 14.8128 20.2183 14.784L20.2685 14.7784Z" fill="#FF9C08"/>
                    <path d="M12.4711 18.9984C15.7543 18.9984 19.5655 17.9904 22.1959 16.0992C22.6279 15.7824 22.2535 15.312 21.8119 15.504C18.8647 16.7136 15.6583 17.3088 12.7495 17.3088C8.42947 17.3088 4.26307 16.1568 0.874269 14.2368C0.586269 14.064 0.355869 14.3616 0.605469 14.5824C3.73507 17.3376 7.87267 18.9984 12.4711 18.9984Z" fill="#FF9C08"/>
                </g>
                <defs>
                    <clipPath >
                    <rect width={resolvedSize} height={resolvedSize} transform="translate(0.5)"/>
                    </clipPath>
                </defs>
            </svg>
          ), snowflake:(
            <svg width={resolvedSize} height={resolvedSize} viewBox="0 0 25 24">
                <g >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.188 11.424L13.076 9.33119C13.0184 9.27359 12.8936 9.22559 12.8072 9.22559H12.1832C12.0968 9.22559 11.9816 9.27359 11.9144 9.33119L9.80241 11.424C9.74481 11.4816 9.69681 11.6064 9.69681 11.6832V12.2976C9.69681 12.384 9.74481 12.4992 9.80241 12.5568L11.9144 14.6496C11.972 14.7072 12.0968 14.7648 12.1832 14.7648H12.8072C12.8936 14.7648 13.0088 14.7168 13.076 14.6496L15.188 12.5568C15.2456 12.4992 15.2936 12.3744 15.2936 12.2976V11.6832C15.2936 11.5968 15.2456 11.4816 15.188 11.424ZM13.4984 12.0096C13.4984 12.096 13.4504 12.2112 13.3832 12.2688L12.7688 12.8736C12.7112 12.9312 12.5864 12.9792 12.5 12.9792H12.4712C12.3848 12.9792 12.2696 12.9312 12.212 12.8736L11.5976 12.2688C11.54 12.2112 11.492 12.0864 11.492 12.0096V11.9808C11.492 11.8944 11.54 11.7792 11.5976 11.712L12.212 11.1072C12.2696 11.0496 12.3944 11.0016 12.4712 11.0016H12.5C12.5864 11.0016 12.7016 11.0496 12.7688 11.1072L13.3832 11.712C13.4408 11.7792 13.4984 11.8944 13.4984 11.9808V12.0096ZM8.51601 12.432C8.41041 12.7776 8.18001 13.0848 7.83441 13.2768L2.74641 16.1856C2.02641 16.5984 1.11441 16.3488 0.701613 15.648C0.288813 14.9376 0.528813 14.0256 1.24881 13.6224L4.09041 12L1.24881 10.368C0.528813 9.95519 0.288813 9.05279 0.701613 8.34239C1.11441 7.63199 2.02641 7.39199 2.74641 7.79519L7.83441 10.704C8.18961 10.9056 8.42961 11.232 8.53521 11.5968C8.57361 11.712 8.58321 11.8272 8.59281 11.9424C8.59281 12.1056 8.57361 12.2688 8.52561 12.4224L8.51601 12.432ZM9.89841 15.168C10.676 15.2256 11.2808 15.8688 11.2808 16.6464V22.4736C11.2808 23.2992 10.6088 23.9616 9.78321 23.9616C8.95761 23.9616 8.28561 23.2992 8.28561 22.4736V19.2192L5.43441 20.8512C4.72401 21.264 3.80241 21.024 3.38961 20.3136C2.97681 19.6032 3.21681 18.6912 3.93681 18.2784L9.02481 15.3696C9.29361 15.216 9.60081 15.1488 9.89841 15.1776V15.168ZM15.1016 8.83199C14.324 8.77439 13.7192 8.13119 13.7192 7.35359V1.53599C13.7192 0.719987 14.3912 0.0575867 15.2168 0.0575867C16.0424 0.0575867 16.7144 0.719987 16.7144 1.53599V4.79039L19.5656 3.15839C20.2856 2.74559 21.1976 2.99519 21.6104 3.69599C22.0232 4.40639 21.7832 5.31839 21.0632 5.72159L15.9752 8.63039C15.7064 8.78399 15.3992 8.85119 15.1112 8.82239L15.1016 8.83199ZM3.93681 5.73119C3.21681 5.31839 2.97681 4.41599 3.38961 3.70559C3.80241 2.99519 4.71441 2.75519 5.43441 3.16799L8.28561 4.79999V1.53599C8.28561 0.719987 8.95761 0.0575867 9.78321 0.0575867C10.6088 0.0575867 11.2808 0.719987 11.2808 1.53599V7.36319C11.2808 8.14079 10.6664 8.78399 9.89841 8.84159C9.61041 8.86079 9.30321 8.80319 9.02481 8.64959L3.93681 5.74079V5.73119ZM21.0632 18.2688C21.7832 18.6816 22.0232 19.5936 21.6104 20.304C21.1976 21.0144 20.2856 21.2544 19.5656 20.8416L16.7144 19.2096V22.464C16.7144 23.2896 16.0424 23.952 15.2168 23.952C14.3912 23.952 13.7192 23.2896 13.7192 22.464V16.6368C13.7192 15.8592 14.3336 15.216 15.1016 15.1584C15.3896 15.1296 15.6968 15.1968 15.9656 15.3504L21.0536 18.2592L21.0632 18.2688ZM20.9096 12L23.7512 13.6224C24.4712 14.0352 24.7112 14.9376 24.2984 15.648C23.8856 16.3584 22.964 16.5984 22.2536 16.1856L17.1656 13.2768C16.8296 13.0848 16.5896 12.7776 16.484 12.432C16.436 12.2784 16.4072 12.1056 16.4168 11.952C16.4168 11.8368 16.436 11.7216 16.4648 11.6064C16.5704 11.2416 16.8008 10.9152 17.156 10.7136L22.244 7.80479C22.9544 7.39199 23.876 7.64159 24.2888 8.35199C24.7016 9.06239 24.4616 9.96479 23.7416 10.3776L20.9 12.0096L20.9096 12Z" fill="#0191FF"/>
                </g>
                <defs>
                    <clipPath>
                        <rect width={resolvedSize} height={resolvedSize}/>
                    </clipPath>
                </defs>
            </svg>
          ), Saleforce: (
            <svg viewBox="0 0 25 25" width={resolvedSize} height={resolvedSize}>
              <path
                fill="#08a4e1"
                d="M19.61,6.12c-.78,0-1.52.16-2.18.46-.77-1.37-2.2-2.29-3.86-2.29-1.24,0-2.37.53-3.17,1.37h0s0,0,0,0h0c-.88-1.16-2.29-1.91-3.87-1.91-2.67,0-4.86,2.17-4.85,4.84,0,.69.14,1.35.4,1.93-1.25.73-2.09,2.1-2.09,3.66,0,2.34,1.87,4.22,4.17,4.22.29,0,.58-.03.86-.09.63,1.72,2.29,2.94,4.22,2.94s3.45-1.14,4.14-2.74c.52.25,1.11.39,1.72.39,1.48,0,2.77-.82,3.44-2.02.34.07.69.11,1.06.11,2.97,0,5.39-2.43,5.39-5.43s-2.4-5.43-5.39-5.43ZM5.35,12.44c0,.44-.32.71-.83.71-.25,0-.49-.04-.75-.17-.05-.03-.1-.05-.14-.09,0-.02-.03-.03,0-.07l.11-.28s.05-.03.07-.02c.03.02.05.03.09.06.3.19.58.19.66.19.22,0,.37-.12.37-.28h0c0-.18-.21-.25-.46-.33l-.06-.02c-.34-.1-.7-.24-.7-.66h0c0-.41.33-.7.8-.7h.05c.28,0,.54.08.73.2.02,0,.04.03.03.06,0,.03-.1.25-.11.28-.02.05-.07.02-.07.02-.17-.1-.43-.16-.65-.16-.2,0-.33.11-.33.25h0c0,.17.22.25.47.33h.05c.34.12.69.26.69.67h0ZM7.47,12.95s0,.04-.03.05c0,0-.06.02-.11.03s-.22.05-.37.07c-.14.03-.29.04-.44.04-.14,0-.27,0-.38-.04s-.21-.07-.3-.13c-.08-.06-.14-.13-.19-.23-.05-.09-.07-.2-.07-.33s.03-.24.08-.34c.05-.1.13-.17.21-.24.09-.07.19-.11.3-.14.12-.03.23-.05.36-.05.12,0,.19,0,.25,0,0,0,.12,0,.24.03v-.06c0-.19-.04-.29-.12-.35-.08-.06-.2-.1-.36-.1,0,0-.36,0-.63.14,0,0-.02,0-.02,0,0,0-.04,0-.05-.02l-.11-.28s0-.06,0-.06c.13-.11.44-.16.44-.16.11-.02.28-.04.38-.04.29,0,.51.07.66.2.15.13.23.35.23.64v1.33ZM8.42,13.04s-.02.05-.04.05h-.38s-.04-.02-.04-.05v-3.09s.02-.05.04-.05h.38s.04.02.04.05v3.09ZM10.82,12.05s-.04.04-.04.04h-1.45c0,.22.06.38.17.48.11.11.27.17.5.17.35,0,.49-.07.6-.11,0,0,.04,0,.06.03l.1.27s0,.06,0,.07c-.09.05-.31.14-.73.14-.2,0-.38-.03-.53-.09s-.27-.13-.37-.24c-.1-.11-.16-.23-.21-.37-.05-.14-.07-.3-.07-.46s.02-.32.07-.46c.04-.14.11-.27.19-.38.09-.11.2-.19.34-.25.13-.07.3-.1.48-.1.15,0,.3.03.41.09.09.04.18.11.28.21.04.04.13.18.16.32.1.33.05.61.05.63ZM12.02,13.15c-.25,0-.49-.04-.75-.17-.05-.03-.1-.05-.14-.09,0-.02-.02-.03,0-.07l.11-.28s.06-.03.07-.02c.03.02.05.03.09.06.3.19.58.19.66.19.22,0,.37-.12.37-.28h0c0-.18-.21-.25-.46-.33l-.06-.02c-.34-.1-.7-.24-.7-.66h0c0-.41.33-.7.8-.7h.05c.28,0,.54.08.73.2.02,0,.04.03.03.06,0,.03-.1.25-.11.28-.02.05-.07.02-.07.02-.17-.1-.43-.16-.65-.16-.2,0-.33.11-.33.25h0c0,.17.22.25.47.33h.05c.34.12.69.26.69.67h0c0,.45-.32.72-.83.72ZM14.54,11.18s-.05.04-.05.04h-.48l-.31,1.86c-.04.19-.08.36-.13.49-.05.13-.11.23-.19.33-.08.09-.16.15-.27.18-.1.04-.22.06-.36.06-.07,0-.13,0-.21-.02-.06,0-.09-.02-.13-.04-.02,0-.03-.03-.02-.06,0-.03.1-.26.11-.3.02-.04.05-.02.05-.02.03,0,.05.02.08.03.04,0,.08,0,.12,0,.07,0,.13,0,.17-.03.06-.02.1-.06.13-.11.04-.05.07-.12.11-.2.03-.09.06-.21.09-.36l.33-1.82h-.32s-.05-.02-.05-.05l.06-.3s.05-.04.05-.04h.33l.02-.1c.05-.29.14-.51.29-.65.14-.14.36-.22.62-.22.08,0,.14,0,.2.02.04,0,.09,0,.13.02,0,0,.04.02.03.05l-.12.31s-.02.04-.07.02c0,0-.03,0-.08-.02-.03,0-.08,0-.12,0-.06,0-.11,0-.15.02-.05,0-.09.04-.13.08-.04.04-.08.1-.11.15-.06.15-.08.32-.08.33h.46s.05.02.05.05l-.06.3ZM16.68,12.43c-.04.14-.11.27-.19.38-.09.11-.2.19-.33.25-.13.06-.29.09-.46.09s-.33-.03-.46-.09c-.13-.06-.24-.14-.33-.25-.09-.11-.15-.23-.19-.38-.04-.14-.07-.3-.07-.46s.02-.32.07-.46c.04-.14.11-.27.19-.38.09-.11.2-.19.33-.25.13-.06.29-.1.46-.1s.33.03.46.1c.13.06.24.14.33.25s.15.23.19.38c.04.14.07.3.07.46s-.02.32-.07.46ZM18.47,10.91s-.09.24-.11.31c0,.03-.03.04-.06.04,0,0-.09-.02-.16-.02-.05,0-.13,0-.19.03-.07.02-.13.06-.18.11s-.1.13-.13.21c-.03.09-.05.23-.05.38v1.08s-.02.05-.05.05h-.38s-.05-.02-.05-.05v-2.16s.02-.05.04-.05h.38s.04.02.04.05v.17c.06-.08.15-.14.24-.18.09-.04.19-.07.38-.06.1,0,.22.03.24.04.04,0,.06.02.05.06h0ZM20.29,13.02c-.16.07-.38.11-.61.11-.38,0-.65-.11-.85-.32-.19-.21-.29-.5-.29-.86,0-.16.02-.32.07-.46.05-.14.12-.27.21-.38.1-.11.21-.19.35-.25.13-.06.3-.1.48-.1.13,0,.23,0,.32.02.1.02.23.05.29.08,0,0,.04.02.03.05-.04.12-.07.19-.11.29-.02.05-.05.03-.05.03-.14-.05-.28-.07-.45-.07-.21,0-.38.07-.47.21-.11.13-.16.32-.16.57,0,.27.07.46.18.59s.28.18.49.18c.09,0,.16,0,.23-.02s.13-.03.2-.06c0,.02.03,0,.05.05h0l.11.29s-.02.05-.02.05ZM22.42,12.05s-.04.04-.04.04h-1.45c0,.22.06.38.17.48.11.11.27.17.5.17.35,0,.49-.07.6-.11,0,0,.04,0,.06.03l.1.27s0,.06,0,.07c-.09.05-.31.14-.73.14-.2,0-.38-.03-.53-.09s-.27-.13-.37-.24c-.1-.11-.16-.23-.21-.37-.05-.14-.07-.3-.07-.46s.02-.32.07-.46c.04-.14.11-.27.19-.38.09-.11.2-.19.34-.25.13-.07.3-.1.48-.1.15,0,.3.03.41.09.09.04.18.11.28.21.05.04.13.18.17.32h0c.1.33.05.61.04.63ZM9.87,11.17c-.19,0-.33.08-.41.21-.07.09-.1.2-.13.35h1.04c0-.13-.04-.25-.1-.35-.09-.13-.21-.21-.4-.21ZM15.7,11.18c-.19,0-.33.07-.41.2-.09.13-.13.33-.13.58s.05.44.13.59c.09.13.22.2.41.2s.33-.07.41-.2c.1-.13.13-.34.13-.59s-.05-.44-.13-.58c-.09-.13-.23-.2-.41-.2ZM6.2,12.12c-.09.06-.13.15-.13.28,0,.08.02.14.05.19,0,.02.02.04.08.08,0,0,.13.11.42.09.21,0,.39-.05.39-.05v-.66s-.18-.03-.39-.03c-.3,0-.42.11-.42.11ZM21.47,11.17c-.19,0-.33.08-.41.21-.06.09-.09.2-.12.35h1.03c0-.13-.04-.25-.1-.35-.09-.13-.21-.21-.4-.21Z"
              />
            </svg>
          ),Oracle: (
            <svg viewBox="0 0 25 25" width={resolvedSize} height={resolvedSize}>
              <path fill="#ff0808" d="M17.1,4.6H7.91C3.54,4.6,0,8.14,0,12.51s3.54,7.9,7.91,7.9h9.19c4.37,0,7.9-3.53,7.9-7.9s-3.54-7.91-7.9-7.91ZM16.89,17.62h-8.78c-2.83,0-5.12-2.28-5.12-5.11s2.29-5.12,5.12-5.12h8.78c2.83,0,5.12,2.3,5.12,5.12s-2.29,5.11-5.12,5.11Z"
              />
            </svg>
          ),Azure: (
            <svg viewBox="0 0 25 25" width={resolvedSize} height={resolvedSize}>
              <polygon
                points="14.52 4.28 11.37 12.91 17.41 20 5.86 22.16 25 22.16 14.52 4.28"
                fill="#088dd7"
              />
              <polygon
                points="13.72 2.84 5.68 20 0 20 6.37 9.03 13.72 2.84"
                fill="#088dd7"
              />
            </svg>
          ),
          AzureSql: (
            <svg viewBox="0 0 100 100" width={resolvedSize} height={resolvedSize}>
              <path
                fill="#088dd7"
                d="M86.67,52.01c0-10.79-.01-21.57.01-32.36,0-1.6-.51-2.97-1.47-4.22-.81-1.05-1.77-1.93-2.84-2.7-3.44-2.46-7.31-3.98-11.35-5.09-7.73-2.14-15.61-2.82-23.6-2.4-6.82.36-13.49,1.43-19.89,3.88-3.29,1.26-6.42,2.81-8.86,5.46-1.29,1.4-1.93,3.02-1.93,4.96.02,21.39.02,42.78,0,64.18,0,1.87.58,3.45,1.79,4.84,2.46,2.81,5.7,4.42,9.09,5.75,6.62,2.59,13.55,3.7,20.61,4,7.49.31,14.91-.28,22.19-2.16,4.53-1.17,8.91-2.71,12.68-5.61,2.33-1.8,3.65-4,3.61-7.16-.13-10.45-.05-20.9-.05-31.36ZM38.3,63.57c-3.26,1.5-6.63,1.27-9.98.22-.35-.11-.47-.32-.47-.68.01-1.46,0-2.92,0-4.58,1.6.98,3.11,1.65,4.81,1.82.09,0,.18.04.27.04,1.05.06,1.87-.34,2.07-1,.2-.69-.22-1.36-1.26-1.87-.76-.37-1.56-.68-2.33-1.03-2.72-1.21-4.06-3.29-3.83-5.92.21-2.43,2.1-4.43,4.85-5.04,2.45-.54,4.9-.4,7.32.2.46.11.63.32.62.81-.03,1.31-.01,2.62-.01,4.04-1.01-.34-1.93-.79-2.92-.99-.85-.17-1.69-.27-2.53-.09-.58.12-1.14.35-1.27,1.02-.14.72.34,1.16.89,1.45.78.41,1.6.73,2.4,1.1,1.77.82,3.41,1.8,4.13,3.77.94,2.56-.21,5.54-2.76,6.71ZM56.01,69.07c-.45,0-.73-.16-1.02-.47-1.04-1.15-2.12-2.27-3.16-3.43-.34-.38-.7-.6-1.23-.67-4.89-.67-8.15-4.53-7.99-9.51.12-3.98,1.63-7.24,5.43-8.89,5.77-2.52,13.15.24,13.4,8.22.13,4.08-1.35,7.3-5.11,9.37,2.05,1.75,4.06,3.48,6.27,5.37-2.39,0-4.5-.01-6.6.01ZM76.26,63.62c.03.59-.2.7-.74.7-3.53-.02-7.07-.03-10.6,0-.68,0-.79-.23-.78-.84.03-2.86.01-5.73.01-8.59s.01-5.79-.01-8.68c0-.53.1-.75.69-.73,1.4.05,2.8.05,4.2,0,.65-.02.81.17.8.81-.03,4.23,0,8.47-.03,12.7,0,.75.23.91.92.89,1.58-.05,3.17,0,4.75-.03.57-.01.82.11.79.74-.05,1-.05,2.01,0,3.01ZM75.04,20.4c-1.73,1.42-3.79,2.16-5.9,2.79-4.55,1.35-9.23,1.9-13.95,2.1-7.06.29-14.06-.13-20.89-2.09-2.2-.63-4.35-1.41-6.12-2.94-1.87-1.62-1.84-3.51.09-5.09,2.26-1.84,4.98-2.64,7.73-3.32,5.14-1.28,10.38-1.72,15.11-1.69,6.36-.02,12.11.48,17.72,2.07,2.23.63,4.42,1.4,6.24,2.91,2.05,1.7,2.04,3.57-.03,5.26ZM52.29,50.04c-1.48-.05-2.54.64-3.09,1.96-.83,1.96-.84,3.99.04,5.93,1.03,2.29,3.96,2.49,5.41.43.71-1.02.82-2.2.89-3.34-.02-1.02-.14-1.99-.53-2.89-.51-1.19-1.31-2.04-2.71-2.08Z"
              />
            </svg>
          ),GoogleStorage: (
            <svg width={resolvedSize} height={resolvedSize} viewBox="0 0 100 100">
                <path d="M63.2569 32.1828H66.2613L74.8251 23.619L75.245 19.9817C59.3062 5.91177 34.9809 7.43173 20.9109 23.3706C17.0016 27.7945 14.1687 33.064 12.6191 38.7654C13.5713 38.375 14.63 38.31 15.6236 38.5879L32.7512 35.7609C32.7512 35.7609 33.6206 34.3179 34.076 34.4066C41.6935 26.0379 54.5156 25.0621 63.316 32.1828H63.2569Z" fill="#EA4335"/>
                <path d="M87.026 38.7652C85.0566 31.5144 81.0172 24.9969 75.3986 20.0171L63.3809 32.0348C68.4553 36.1807 71.3474 42.4321 71.2232 48.985V51.1201C77.1315 51.1201 81.922 55.9106 81.922 61.8189C81.922 67.7273 77.1315 72.5178 71.2232 72.5178H49.8255L47.6904 74.6824V87.5163L49.8255 89.6514H71.2232C86.5884 89.7696 99.1443 77.4089 99.2626 62.0437C99.3336 52.711 94.7382 43.9816 87.026 38.7652Z" fill="#4285F4"/>
                <path d="M28.3985 89.5155H49.7962V72.3879H28.3985C26.8726 72.3879 25.3704 72.0567 23.9806 71.4238L20.9761 72.3583L12.3532 80.9221L11.6021 83.9265C16.434 87.5815 22.3364 89.5451 28.3985 89.5155Z" fill="#34A853"/>
                <path d="M28.3982 33.9573C13.0271 34.046 0.648577 46.5782 0.73729 61.9494C0.790518 70.5309 4.79446 78.6098 11.6017 83.838L24.0098 71.4299C18.6279 68.9991 16.2326 62.6591 18.6634 57.2771C21.0941 51.8952 27.4342 49.4999 32.8161 51.9306C35.1877 53.0011 37.0862 54.9055 38.1626 57.2771L50.5707 44.869C45.2952 37.9612 37.0862 33.9218 28.3982 33.9573Z" fill="#FBBC05"/>
            </svg>
          ),CloudStorage: (
            <svg viewBox="0 0 25 25" width={resolvedSize} height={resolvedSize}>
              <path
                fill="#4a8af9"
                d="M24.7,11.38l-5.13-8.88c-.4-.69-1.14-1.12-1.95-1.12H7.37c-.8,0-1.54.43-1.95,1.12L.3,11.38c-.4.69-.4,1.55,0,2.25l5.13,8.88h0c.4.69,1.14,1.12,1.95,1.12h10.25c.8,0,1.54-.43,1.95-1.12l5.13-8.88c.4-.69.4-1.55,0-2.25ZM18.21,15.76c0,.17-.14.32-.32.32H7.1c-.17,0-.32-.14-.32-.32v-2.23c0-.17.14-.32.32-.32h10.8s0,0,0,0c.17,0,.32.14.32.32v2.23ZM18.21,11.47c0,.17-.14.32-.32.32H7.1c-.17,0-.32-.14-.32-.32v-2.23c0-.17.14-.32.32-.32h10.8c.17,0,.32.14.32.32v2.23ZM16.22,14h0c-.36,0-.64.29-.64.65,0,.36.29.65.65.65h0s.03,0,.05,0c.36-.01.63-.32.62-.67s-.32-.63-.67-.62ZM16.22,9.71h0c-.36,0-.64.29-.64.65,0,.36.29.65.65.65.36,0,.65-.29.65-.65s-.29-.65-.65-.65Z"
              />
            </svg>
          ), Redshift:(
            <svg width={resolvedSize} height={resolvedSize} viewBox="0 0 60 60">
                <path d="M35.9268 0H23.9268V60H35.9268V0Z" fill="#2E73B8"/>
                <path d="M23.9269 0L15.5854 4.53658V55.6098L23.9269 60V0Z" fill="#215C99"/>
                <path d="M36.0732 0V60L44.4147 55.6098V4.53658L36.0732 0Z" fill="#5294CF"/>
                <path d="M52.7559 8.3418L57.4388 10.8296V49.1711L52.7559 51.6589V8.3418Z" fill="#5294CF"/>
                <path d="M52.756 51.6589L44.4146 49.1711V10.8296L52.756 8.3418V51.6589Z" fill="#215C99"/>
                <path d="M2.56104 10.8296V49.1711L7.24396 51.6589V8.3418L2.56104 10.8296Z" fill="#215C99"/>
                <path d="M7.24414 8.3418L15.5856 10.8296V49.1711L7.24414 51.6589V8.3418Z" fill="#5294CF"/>
            </svg>
          )
    };  
    const selectedIcon = icons[name] || null;
    return <div>{name ? selectedIcon : "Error"}</div>;
  }
  