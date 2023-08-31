import{r as k}from"./index.ed373d49.js";function y(r){return typeof r=="object"&&r!=null&&!Array.isArray(r)}function M(r){return Object.fromEntries(Object.entries(r??{}).filter(([e,t])=>t!==void 0))}var $=r=>r==="base";function K(r){return r.slice().filter(e=>!$(e))}var O=/!(important)?$/;function U(r){return typeof r=="string"?O.test(r):!1}function q(r){return typeof r=="string"?r.replace(O,"").trim():r}function A(r){return typeof r=="string"?r.replaceAll(" ","_"):r}function w(r){return String.fromCharCode(r+(r>25?39:97))}function J(r){let e="",t;for(t=Math.abs(r);t>52;t=t/52|0)e=w(t%52)+e;return w(t%52)+e}function Z(r,e){let t=e.length;for(;t;)r=r*33^e.charCodeAt(--t);return r}function Q(r){return J(Z(5381,r)>>>0)}function L(...r){const e={};for(const t of r)for(const[o,n]of Object.entries(t))y(n)?e[o]=L(e[o]||{},n):e[o]=n;return e}var rr=r=>r!=null;function x(r,e,t={}){const{stop:o,getKey:n}=t;function a(i,d=[]){if(y(i)||Array.isArray(i)){const l={};for(const[s,c]of Object.entries(i)){const p=n?.(s)??s,g=[...d,p];if(o?.(i,g))return e(i,d);const b=a(c,g);rr(b)&&(l[p]=b)}return l}return e(i,d)}return a(r)}function zr(r,e){return y(r)?x(r,t=>e(t)):e(r)}function er(r,e){return r.reduce((t,o,n)=>{const a=e[n];return o!=null&&(t[a]=o),t},{})}function tr(r,e){const{hasShorthand:t,resolveShorthand:o}=e.utility;return x(r,n=>n,{getKey:n=>t?o(n):n})}function or(r,e){const{utility:t,conditions:o}=e,{hasShorthand:n,resolveShorthand:a}=t;return x(r,i=>Array.isArray(i)?er(i,o.breakpoints.keys):i,{stop:i=>Array.isArray(i),getKey:i=>n?a(i):i})}var nr={shift:r=>r,finalize:r=>r,breakpoints:{keys:[]}},ir=r=>typeof r=="string"?r.replaceAll(/[\n\s]+/g," "):r;function ar(r){const{utility:e,hash:t,conditions:o=nr}=r,n=i=>[e.prefix,i].filter(Boolean).join("-"),a=(i,d)=>{let l;if(t){const s=[...o.finalize(i),d];l=n(Q(s.join(":")))}else l=[...o.finalize(i),n(d)].join(":");return l};return(i={})=>{const d=or(i,r),l=new Set;return x(d,(s,c)=>{const p=U(s);if(s==null)return;const[g,...b]=o.shift(c),u=K(b),f=e.transform(g,q(ir(s)));let m=a(u,f.className);p&&(m=`${m}!`),l.add(m)}),Array.from(l).join(" ")}}function lr(...r){return r.filter(e=>y(e)&&Object.keys(M(e)).length>0)}function sr(r){function e(n){const a=lr(...n);return a.length===1?a:a.map(i=>tr(i,r))}function t(...n){return L(...e(n))}function o(...n){return Object.assign({},...e(n))}return{mergeCss:t,assignCss:o}}var z=r=>{const e=new Map;return(...o)=>{const n=JSON.stringify(o);if(e.has(n))return e.get(n);const a=r(...o);return e.set(n,a),a}},dr=/([A-Z])/g,cr=/^ms-/,gr=z(r=>r.startsWith("--")?r:r.replace(dr,"-$1").replace(cr,"-ms-").toLowerCase());function j(r,...e){const t=Object.getOwnPropertyDescriptors(r),o=Object.keys(t),n=i=>{const d={};for(let l=0;l<i.length;l++){const s=i[l];t[s]&&(Object.defineProperty(d,s,t[s]),delete t[s])}return d},a=i=>n(Array.isArray(i)?i:o.filter(i));return e.map(a).concat(n(o))}var D=["htmlSize","htmlTranslate","htmlWidth","htmlHeight"];function pr(r){return D.includes(r)?r.replace("html","").toLowerCase():r}function I(r){return Object.fromEntries(Object.entries(r).map(([e,t])=>[pr(e),t]))}I.keys=D;const br="_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_default,_optional,_open,_fullscreen,_loading,_currentPage,_currentStep,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,base",F=new Set(br.split(","));function E(r){return F.has(r)||/^@|&|&$/.test(r)}const mr=/^_/,ur=/&|@/;function fr(r){return r.map(e=>F.has(e)?e.replace(mr,""):ur.test(e)?`[${A(e.trim())}]`:e)}function hr(r){return r.sort((e,t)=>{const o=E(e),n=E(t);return o&&!n?1:!o&&n?-1:0})}const kr="aspectRatio:aspect,boxDecorationBreak:decoration,zIndex:z,boxSizing:box,objectPosition:object,objectFit:object,overscrollBehavior:overscroll,overscrollBehaviorX:overscroll-x,overscrollBehaviorY:overscroll-y,position:pos/1,top:top,left:left,insetInline:inset-x,insetBlock:inset-y,inset:inset,insetBlockEnd:inset-b,insetBlockStart:inset-t,insetInlineEnd:end/insetEnd/1,insetInlineStart:start/insetStart/1,right:right,bottom:bottom,insetX:inset-x,insetY:inset-y,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:basis,flex:flex,flexDirection:flex/flexDir,flexGrow:grow,flexShrink:shrink,gridTemplateColumns:grid-cols,gridTemplateRows:grid-rows,gridColumn:col-span,gridRow:row-span,gridColumnStart:col-start,gridColumnEnd:col-end,gridAutoFlow:grid-flow,gridAutoColumns:auto-cols,gridAutoRows:auto-rows,gap:gap,gridGap:gap,gridRowGap:gap-x,gridColumnGap:gap-y,rowGap:gap-x,columnGap:gap-y,justifyContent:justify,alignContent:content,alignItems:items,alignSelf:self,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pb,paddingBlockStart:pt,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mb,marginBlockStart:mt,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,outlineWidth:ring/ringWidth,outlineColor:ring/ringColor,outline:ring/1,outlineOffset:ring/ringOffset,divideX:divide-x,divideY:divide-y,divideColor:divide,divideStyle:divide,width:w/1,inlineSize:w,minWidth:min-w/minW,minInlineSize:min-w,maxWidth:max-w/maxW,maxInlineSize:max-w,height:h/1,blockSize:h,minHeight:min-h/minH,minBlockSize:min-h,maxHeight:max-h/maxH,maxBlockSize:max-b,color:text,fontFamily:font,fontSize:fs,fontWeight:font,fontSmoothing:smoothing,fontVariantNumeric:numeric,letterSpacing:tracking,lineHeight:leading,textAlign:text,textDecoration:text-decor,textDecorationColor:text-decor,textEmphasisColor:text-emphasis,textDecorationStyle:decoration,textDecorationThickness:decoration,textUnderlineOffset:underline-offset,textTransform:text,textIndent:indent,textShadow:text-shadow,textOverflow:text,verticalAlign:align,wordBreak:break,textWrap:text,truncate:truncate,lineClamp:clamp,listStyleType:list,listStylePosition:list,listStyleImage:list-img,backgroundPosition:bg/bgPosition,backgroundPositionX:bg-x/bgPositionX,backgroundPositionY:bg-y/bgPositionY,backgroundAttachment:bg/bgAttachment,backgroundClip:bg-clip/bgClip,background:bg/1,backgroundColor:bg/bgColor,backgroundOrigin:bg-origin/bgOrigin,backgroundImage:bg-img/bgImage,backgroundRepeat:bg-repeat/bgRepeat,backgroundBlendMode:bg-blend/bgBlendMode,backgroundSize:bg/bgSize,backgroundGradient:bg-gradient/bgGradient,textGradient:text-gradient,gradientFrom:from,gradientTo:to,gradientVia:via,borderRadius:rounded/1,borderTopLeftRadius:rounded-tl/roundedTopLeft,borderTopRightRadius:rounded-tr/roundedTopRight,borderBottomRightRadius:rounded-br/roundedBottomRight,borderBottomLeftRadius:rounded-bl/roundedBottomLeft,borderTopRadius:rounded-t/roundedTop,borderRightRadius:rounded-r/roundedRight,borderBottomRadius:rounded-b/roundedBottom,borderLeftRadius:rounded-l/roundedLeft,borderStartStartRadius:rounded-ss/roundedStartStart,borderStartEndRadius:rounded-se/roundedStartEnd,borderStartRadius:rounded-s/roundedStart,borderEndStartRadius:rounded-es/roundedEndStart,borderEndEndRadius:rounded-ee/roundedEndEnd,borderEndRadius:rounded-e/roundedEnd,border:border,borderColor:border,borderInline:border-x/borderX,borderInlineWidth:border-x/borderXWidth,borderInlineColor:border-x/borderXColor,borderBlock:border-y/borderY,borderBlockWidth:border-y/borderYWidth,borderBlockColor:border-y/borderYColor,borderLeft:border-l,borderLeftColor:border-l,borderInlineStart:border-s/borderStart,borderInlineStartWidth:border-s/borderStartWidth,borderInlineStartColor:border-s/borderStartColor,borderRight:border-r,borderRightColor:border-r,borderInlineEnd:border-e/borderEnd,borderInlineEndWidth:border-e/borderEndWidth,borderInlineEndColor:border-e/borderEndColor,borderTop:border-t,borderTopColor:border-t,borderBottom:border-b,borderBottomColor:border-b,borderBlockEnd:border-be,borderBlockEndColor:border-be,borderBlockStart:border-bs,borderBlockStartColor:border-bs,boxShadow:shadow/1,boxShadowColor:shadow/shadowColor,mixBlendMode:mix-blend,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:backdrop,backdropBlur:backdrop-blur,backdropBrightness:backdrop-brightness,backdropContrast:backdrop-contrast,backdropGrayscale:backdrop-grayscale,backdropHueRotate:backdrop-hue-rotate,backdropInvert:backdrop-invert,backdropOpacity:backdrop-opacity,backdropSaturate:backdrop-saturate,backdropSepia:backdrop-sepia,borderCollapse:border,borderSpacing:border-spacing,borderSpacingX:border-spacing-x,borderSpacingY:border-spacing-y,tableLayout:table,transitionTimingFunction:ease,transitionDelay:delay,transitionDuration:duration,transitionProperty:transition-prop,transition:transition,animation:animation,animationName:animation-name,animationDelay:animation-delay,transformOrigin:origin,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,accentColor:accent,caretColor:caret,scrollBehavior:scroll,scrollbar:scrollbar,scrollMargin:scroll-m,scrollMarginX:scroll-mx,scrollMarginY:scroll-my,scrollMarginLeft:scroll-ml,scrollMarginRight:scroll-mr,scrollMarginTop:scroll-mt,scrollMarginBottom:scroll-mb,scrollMarginBlock:scroll-my,scrollMarginBlockEnd:scroll-mb,scrollMarginBlockStart:scroll-mt,scrollMarginInline:scroll-mx,scrollMarginInlineEnd:scroll-me,scrollMarginInlineStart:scroll-ms,scrollPadding:scroll-p,scrollPaddingBlock:scroll-pb,scrollPaddingBlockStart:scroll-pt,scrollPaddingBlockEnd:scroll-pb,scrollPaddingInline:scroll-px,scrollPaddingInlineEnd:scroll-pe,scrollPaddingInlineStart:scroll-ps,scrollPaddingX:scroll-px,scrollPaddingY:scroll-py,scrollPaddingLeft:scroll-pl,scrollPaddingRight:scroll-pr,scrollPaddingTop:scroll-pt,scrollPaddingBottom:scroll-pb,scrollSnapAlign:snap,scrollSnapStop:snap,scrollSnapType:snap,scrollSnapStrictness:strictness,scrollSnapMargin:snap-m,scrollSnapMarginTop:snap-mt,scrollSnapMarginBottom:snap-mb,scrollSnapMarginLeft:snap-ml,scrollSnapMarginRight:snap-mr,touchAction:touch,userSelect:select,fill:fill,stroke:stroke,srOnly:sr,debug:debug,appearance:appearance,backfaceVisibility:backface,clipPath:clip-path,hyphens:hyphens,mask:mask,maskImage:mask-image,maskSize:mask-size,textSizeAdjust:text-size-adjust,textStyle:textStyle",X=new Map,Y=new Map;kr.split(",").forEach(r=>{const[e,t]=r.split(":"),[o,...n]=t.split("/");X.set(e,o),n.length&&n.forEach(a=>{Y.set(a==="1"?o:a,e)})});const T=r=>Y.get(r)||r,G={conditions:{shift:hr,finalize:fr,breakpoints:{keys:["base","sm","md","lg","xl","2xl"]}},utility:{transform:(r,e)=>{const t=T(r);return{className:`${X.get(t)||gr(t)}_${A(e)}`}},hasShorthand:!0,resolveShorthand:T}},Sr=ar(G),v=new Map,h=r=>{const e=Sr(r);return v.set(e,r),e};h.raw=r=>r;const{mergeCss:S,assignCss:P}=sr(G);function W(){const r=[];let e="",t=0,o;for(;t<arguments.length;)if(o=arguments[t++],!(!o||typeof o!="string")){if(v.has(o)){r.push(v.get(o));continue}e&&(e+=" "),e+=o.toString()}const n=S(...r);return[h(n),e].join(" ")}function yr(r){const{base:e={},variants:t={},defaultVariants:o={},compoundVariants:n=[]}=r;function a(c){const p={...o,...M(c)};let g={...e};for(const[u,f]of Object.entries(p))t[u]?.[f]&&(g=S(g,t[u][f]));const b=xr(n,p);return S(g,b)}function i(c){return h(a(c))}const d=Object.keys(t);function l(c){return j(c,d)}const s=Object.fromEntries(Object.entries(t).map(([c,p])=>[c,Object.keys(p)]));return Object.assign(i,{__cva__:!0,variantMap:s,variantKeys:d,resolve:a,config:r,splitVariantProps:l})}function xr(r,e){let t={};return r.forEach(o=>{Object.entries(o).every(([a,i])=>a==="css"?!0:(Array.isArray(i)?i:[i]).some(l=>e[a]===l))&&(t=S(t,o.css))}),t}var _r="css,pos,insetEnd,end,insetStart,start,flexDir,p,pl,pr,pt,pb,py,paddingY,paddingX,px,pe,paddingEnd,ps,paddingStart,ml,mr,mt,mb,m,my,marginY,mx,marginX,me,marginEnd,ms,marginStart,ringWidth,ringColor,ring,ringOffset,w,minW,maxW,h,minH,maxH,bgPosition,bgPositionX,bgPositionY,bgAttachment,bgClip,bg,bgColor,bgOrigin,bgImage,bgRepeat,bgBlendMode,bgSize,bgGradient,rounded,roundedTopLeft,roundedTopRight,roundedBottomRight,roundedBottomLeft,roundedTop,roundedRight,roundedBottom,roundedLeft,roundedStartStart,roundedStartEnd,roundedStart,roundedEndStart,roundedEndEnd,roundedEnd,borderX,borderXWidth,borderXColor,borderY,borderYWidth,borderYColor,borderStart,borderStartWidth,borderStartColor,borderEnd,borderEndWidth,borderEndColor,shadow,shadowColor,x,y,aspectRatio,boxDecorationBreak,zIndex,boxSizing,objectPosition,objectFit,overscrollBehavior,overscrollBehaviorX,overscrollBehaviorY,position,top,left,insetInline,insetBlock,inset,insetBlockEnd,insetBlockStart,insetInlineEnd,insetInlineStart,right,bottom,insetX,insetY,float,visibility,display,hideFrom,hideBelow,flexBasis,flex,flexDirection,flexGrow,flexShrink,gridTemplateColumns,gridTemplateRows,gridColumn,gridRow,gridColumnStart,gridColumnEnd,gridAutoFlow,gridAutoColumns,gridAutoRows,gap,gridGap,gridRowGap,gridColumnGap,rowGap,columnGap,justifyContent,alignContent,alignItems,alignSelf,padding,paddingLeft,paddingRight,paddingTop,paddingBottom,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingInline,paddingInlineEnd,paddingInlineStart,marginLeft,marginRight,marginTop,marginBottom,margin,marginBlock,marginBlockEnd,marginBlockStart,marginInline,marginInlineEnd,marginInlineStart,outlineWidth,outlineColor,outline,outlineOffset,divideX,divideY,divideColor,divideStyle,width,inlineSize,minWidth,minInlineSize,maxWidth,maxInlineSize,height,blockSize,minHeight,minBlockSize,maxHeight,maxBlockSize,color,fontFamily,fontSize,fontWeight,fontSmoothing,fontVariantNumeric,letterSpacing,lineHeight,textAlign,textDecoration,textDecorationColor,textEmphasisColor,textDecorationStyle,textDecorationThickness,textUnderlineOffset,textTransform,textIndent,textShadow,textOverflow,verticalAlign,wordBreak,textWrap,truncate,lineClamp,listStyleType,listStylePosition,listStyleImage,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundAttachment,backgroundClip,background,backgroundColor,backgroundOrigin,backgroundImage,backgroundRepeat,backgroundBlendMode,backgroundSize,backgroundGradient,textGradient,gradientFrom,gradientTo,gradientVia,borderRadius,borderTopLeftRadius,borderTopRightRadius,borderBottomRightRadius,borderBottomLeftRadius,borderTopRadius,borderRightRadius,borderBottomRadius,borderLeftRadius,borderStartStartRadius,borderStartEndRadius,borderStartRadius,borderEndStartRadius,borderEndEndRadius,borderEndRadius,border,borderColor,borderInline,borderInlineWidth,borderInlineColor,borderBlock,borderBlockWidth,borderBlockColor,borderLeft,borderLeftColor,borderInlineStart,borderInlineStartWidth,borderInlineStartColor,borderRight,borderRightColor,borderInlineEnd,borderInlineEndWidth,borderInlineEndColor,borderTop,borderTopColor,borderBottom,borderBottomColor,borderBlockEnd,borderBlockEndColor,borderBlockStart,borderBlockStartColor,opacity,boxShadow,boxShadowColor,mixBlendMode,filter,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia,dropShadow,blur,backdropFilter,backdropBlur,backdropBrightness,backdropContrast,backdropGrayscale,backdropHueRotate,backdropInvert,backdropOpacity,backdropSaturate,backdropSepia,borderCollapse,borderSpacing,borderSpacingX,borderSpacingY,tableLayout,transitionTimingFunction,transitionDelay,transitionDuration,transitionProperty,transition,animation,animationName,animationDelay,transformOrigin,scale,scaleX,scaleY,translate,translateX,translateY,accentColor,caretColor,scrollBehavior,scrollbar,scrollMargin,scrollMarginX,scrollMarginY,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollMarginBottom,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollPadding,scrollPaddingBlock,scrollPaddingBlockStart,scrollPaddingBlockEnd,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingX,scrollPaddingY,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollPaddingBottom,scrollSnapAlign,scrollSnapStop,scrollSnapType,scrollSnapStrictness,scrollSnapMargin,scrollSnapMarginTop,scrollSnapMarginBottom,scrollSnapMarginLeft,scrollSnapMarginRight,touchAction,userSelect,fill,stroke,srOnly,debug,appearance,backfaceVisibility,clipPath,hyphens,mask,maskImage,maskSize,textSizeAdjust,colorPalette,textStyle,_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_default,_optional,_open,_fullscreen,_loading,_currentPage,_currentStep,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl",Br=_r.split(","),Cr="WebkitAppearance,WebkitBorderBefore,WebkitBorderBeforeColor,WebkitBorderBeforeStyle,WebkitBorderBeforeWidth,WebkitBoxReflect,WebkitLineClamp,WebkitMask,WebkitMaskAttachment,WebkitMaskClip,WebkitMaskComposite,WebkitMaskImage,WebkitMaskOrigin,WebkitMaskPosition,WebkitMaskPositionX,WebkitMaskPositionY,WebkitMaskRepeat,WebkitMaskRepeatX,WebkitMaskRepeatY,WebkitMaskSize,WebkitOverflowScrolling,WebkitTapHighlightColor,WebkitTextFillColor,WebkitTextStroke,WebkitTextStrokeColor,WebkitTextStrokeWidth,WebkitTouchCallout,WebkitUserModify,accentColor,alignContent,alignItems,alignSelf,alignTracks,all,animation,animationComposition,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationTimingFunction,animationTimeline,appearance,aspectRatio,azimuth,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundSize,blockOverflow,blockSize,border,borderBlock,borderBlockColor,borderBlockStyle,borderBlockWidth,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderEndEndRadius,borderEndStartRadius,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInline,borderInlineEnd,borderInlineColor,borderInlineStyle,borderInlineWidth,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStartEndRadius,borderStartStartRadius,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxAlign,boxDecorationBreak,boxDirection,boxFlex,boxFlexGroup,boxLines,boxOrdinalGroup,boxOrient,boxPack,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,captionSide,caret,caretColor,caretShape,clear,clip,clipPath,color,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicSize,containIntrinsicBlockSize,containIntrinsicHeight,containIntrinsicInlineSize,containIntrinsicWidth,container,containerName,containerType,content,contentVisibility,counterIncrement,counterReset,counterSet,cursor,direction,display,emptyCells,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,font,fontFamily,fontFeatureSettings,fontKerning,fontLanguageOverride,fontOpticalSizing,fontPalette,fontVariationSettings,fontSize,fontSizeAdjust,fontSmooth,fontStretch,fontStyle,fontSynthesis,fontVariant,fontVariantAlternates,fontVariantCaps,fontVariantEastAsian,fontVariantEmoji,fontVariantLigatures,fontVariantNumeric,fontVariantPosition,fontWeight,forcedColorAdjust,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,hangingPunctuation,height,hyphenateCharacter,hyphenateLimitChars,hyphens,imageOrientation,imageRendering,imageResolution,imeMode,initialLetter,initialLetterAlign,inlineSize,inputSecurity,inset,insetBlock,insetBlockEnd,insetBlockStart,insetInline,insetInlineEnd,insetInlineStart,isolation,justifyContent,justifyItems,justifySelf,justifyTracks,left,letterSpacing,lineBreak,lineClamp,lineHeight,lineHeightStep,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlock,marginBlockEnd,marginBlockStart,marginBottom,marginInline,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marginTrim,mask,maskBorder,maskBorderMode,maskBorderOutset,maskBorderRepeat,maskBorderSlice,maskBorderSource,maskBorderWidth,maskClip,maskComposite,maskImage,maskMode,maskOrigin,maskPosition,maskRepeat,maskSize,maskType,masonryAutoFlow,mathDepth,mathShift,mathStyle,maxBlockSize,maxHeight,maxInlineSize,maxLines,maxWidth,minBlockSize,minHeight,minInlineSize,minWidth,mixBlendMode,objectFit,objectPosition,offset,offsetAnchor,offsetDistance,offsetPath,offsetPosition,offsetRotate,opacity,order,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowBlock,overflowClipBox,overflowClipMargin,overflowInline,overflowWrap,overflowX,overflowY,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInline,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,page,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,printColorAdjust,quotes,resize,right,rotate,rowGap,rubyAlign,rubyMerge,rubyPosition,scale,scrollbarColor,scrollbarGutter,scrollbarWidth,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockStart,scrollMarginBlockEnd,scrollMarginBottom,scrollMarginInline,scrollMarginInlineStart,scrollMarginInlineEnd,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockStart,scrollPaddingBlockEnd,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineStart,scrollPaddingInlineEnd,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapCoordinate,scrollSnapDestination,scrollSnapPointsX,scrollSnapPointsY,scrollSnapStop,scrollSnapType,scrollSnapTypeX,scrollSnapTypeY,scrollTimeline,scrollTimelineAxis,scrollTimelineName,shapeImageThreshold,shapeMargin,shapeOutside,tabSize,tableLayout,textAlign,textAlignLast,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkip,textDecorationSkipInk,textDecorationStyle,textDecorationThickness,textEmphasis,textEmphasisColor,textEmphasisPosition,textEmphasisStyle,textIndent,textJustify,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textTransform,textUnderlineOffset,textUnderlinePosition,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,translate,unicodeBidi,userSelect,verticalAlign,viewTransitionName,visibility,whiteSpace,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,zIndex,zoom,alignmentBaseline,baselineShift,clipRule,colorInterpolation,colorRendering,dominantBaseline,fill,fillOpacity,fillRule,floodColor,floodOpacity,glyphOrientationVertical,lightingColor,marker,markerEnd,markerMid,markerStart,shapeRendering,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,textAnchor,vectorEffect",Rr=Cr.split(",").concat(Br),Ir=new Map(Rr.map(r=>[r,!0])),vr=/&|@/,wr=z(r=>Ir.has(r)||r.startsWith("--")||vr.test(r));function R(r,e={}){const t=e.__cva__||e.__recipe__?e:yr(e),o=k.forwardRef(function(a,i){const{as:d=r,...l}=a,[s,c,p,g]=k.useMemo(()=>j(l,t.variantKeys,wr,I.keys),[l]);function b(){const{css:m,...B}=c,C=P(B,m);return W(t(s),h(C),g.className)}function u(){const{css:m,...B}=c,C=t.resolve(s),H=P(C,B,m);return W(h(H),g.className)}const f=e.__recipe__?b:u;return k.createElement(d,{ref:i,...g,...I(p),className:f()})});return o.displayName=`styled.${r}`,o}function Er(){const r=new Map;return new Proxy(R,{apply(e,t,o){return R(...o)},get(e,t){return r.has(t)||r.set(t,R(t)),r.get(t)}})}const jr=Er();var V={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=k,Pr=Symbol.for("react.element"),Wr=Symbol.for("react.fragment"),Mr=Object.prototype.hasOwnProperty,Or=Tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ar={key:!0,ref:!0,__self:!0,__source:!0};function N(r,e,t){var o,n={},a=null,i=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(i=e.ref);for(o in e)Mr.call(e,o)&&!Ar.hasOwnProperty(o)&&(n[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)n[o]===void 0&&(n[o]=e[o]);return{$$typeof:Pr,type:r,key:a,ref:i,props:n,_owner:Or.current}}_.Fragment=Wr;_.jsx=N;_.jsxs=N;V.exports=_;var Dr=V.exports;export{h as c,Dr as j,zr as m,jr as s};