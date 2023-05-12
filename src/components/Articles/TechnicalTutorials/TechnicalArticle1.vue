<template>
  <div style="text-align: start">
    <link href="/static/CSSfiles/MarkDown.css" rel="stylesheet">
    <div class="typora-export-content">
      <div id="write" class=""><h1 id="课程链接"><span>课程链接：</span></h1>
        <p><a href="http://staff.ustc.edu.cn/~renjiec/GAMES301/index.html"><span>GAMES301曲面参数化</span></a>
          <span>曲面参数化说白了就是研究建模展uv贴图、研究如何把一个曲面展开到平面上的，在建模软件和游戏引擎里面应用很广。</span>
        </p>
        <h1 id="对本次作业中主要要解的线性方程组的理解"><span>对本次作业中主要要解的线性方程组的理解</span></h1>
        <p>
          <strong><span>原理：对于没有隧道并且有且只有一条边界线的流型网格体，将其边界顶点有序地落在一个凸多边形上，并且保证内部的顶点是其邻居的凸线性组合，那么得到的（u，v）坐标参数化是双射的。</span></strong>
          <span>也就是说以这种方式展uv，得到的uv图结果不存在自交、重叠。</span></p>
        <p><span>对于参数化后的每一个非边界顶点</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                 viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-38-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-38-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-38-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-38-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_i</script>
          <span>，要保证其为为邻居顶点</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.296ex" height="2.211ex" role="img" focusable="false"
                 viewBox="0 -683 1456.9 977.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-18-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-18-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-18-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-18-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-18-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-18-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-18-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D457" xlink:href="#MJX-18-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>j</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_{i,j}</script>
          <span>的凸线性组合，则有：</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="47.334ex" height="2.363ex" role="img" focusable="false"
                 viewBox="0 -750 20921.8 1044.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-3-TEX-I-1D44A"
                      d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"></path>
                <path id="MJX-3-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-3-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-3-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                <path id="MJX-3-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-3-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
                <path id="MJX-3-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path id="MJX-3-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path id="MJX-3-TEX-N-2026"
                      d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60ZM525 60Q525 84 542 102T585 120Q609 120 627 104T646 61Q646 36 629 18T586 0T543 17T525 60ZM972 60Q972 84 989 102T1032 120Q1056 120 1074 104T1093 61Q1093 36 1076 18T1033 0T990 17T972 60Z"></path>
                <path id="MJX-3-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path id="MJX-3-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path id="MJX-3-TEX-SO-2211"
                      d="M61 748Q64 750 489 750H913L954 640Q965 609 976 579T993 533T999 516H979L959 517Q936 579 886 621T777 682Q724 700 655 705T436 710H319Q183 710 183 709Q186 706 348 484T511 259Q517 250 513 244L490 216Q466 188 420 134T330 27L149 -187Q149 -188 362 -188Q388 -188 436 -188T506 -189Q679 -189 778 -162T936 -43Q946 -27 959 6H999L913 -249L489 -250Q65 -250 62 -248Q56 -246 56 -239Q56 -234 118 -161Q186 -81 245 -11L428 206Q428 207 242 462L57 717L56 728Q56 744 61 748Z"></path>
                <path id="MJX-3-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path>
                <path id="MJX-3-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-3-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-3-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-3-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="30" xlink:href="#MJX-3-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(1821.1,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-3-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-3-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-3-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="30" xlink:href="#MJX-3-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(3562.4,0)">
                    <use data-c="2B" xlink:href="#MJX-3-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(4562.6,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-3-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-3-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-3-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="31" xlink:href="#MJX-3-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(6383.7,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-3-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-3-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-3-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="31" xlink:href="#MJX-3-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(8125,0)">
                    <use data-c="2B" xlink:href="#MJX-3-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(9125.2,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-3-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-3-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-3-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="32" xlink:href="#MJX-3-TEX-N-32"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(10946.3,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-3-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-3-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-3-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="32" xlink:href="#MJX-3-TEX-N-32"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(12687.6,0)">
                    <use data-c="2B" xlink:href="#MJX-3-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(13687.8,0)">
                    <use data-c="2026" xlink:href="#MJX-3-TEX-N-2026"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(15137.6,0)">
                    <use data-c="3D" xlink:href="#MJX-3-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(16193.4,0)">
                    <use data-c="28" xlink:href="#MJX-3-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(16582.4,0)">
                    <use data-c="2211" xlink:href="#MJX-3-TEX-SO-2211"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(17805,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-3-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-3-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-3-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D457" xlink:href="#MJX-3-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(19563.9,0)">
                    <use data-c="29" xlink:href="#MJX-3-TEX-N-29"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(19952.9,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-3-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-3-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>0</mn>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>0</mn>
                  </mrow>
                </msub>
                <mo>+</mo>
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <mo>+</mo>
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>2</mn>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>2</mn>
                  </mrow>
                </msub>
                <mo>+</mo>
                <mo>…</mo>
                <mo>=</mo>
                <mo stretchy="false">(</mo>
                <mo data-mjx-texclass="OP">∑</mo>
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>j</mi>
                  </mrow>
                </msub>
                <mo stretchy="false">)</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">W_{i,0}P_{i,0}+W_{i,1}P_{i,1}+W_{i,2}P_{i,2}+\ldots=(\sum W_{i,j})P_{i}</script>
          <span>（</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="8.128ex" height="2.211ex" role="img" focusable="false"
                 viewBox="0 -683 3592.4 977.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-4-TEX-I-1D44A"
                      d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"></path>
                <path id="MJX-4-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-4-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-4-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path>
                <path id="MJX-4-TEX-N-3E"
                      d="M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z"></path>
                <path id="MJX-4-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-4-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-4-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-4-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D457" xlink:href="#MJX-4-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(2036.6,0)">
                    <use data-c="3E" xlink:href="#MJX-4-TEX-N-3E"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(3092.4,0)">
                    <use data-c="30" xlink:href="#MJX-4-TEX-N-30"></use>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>j</mi>
                  </mrow>
                </msub>
                <mo>&gt;</mo>
                <mn>0</mn>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">W_{i,j}>0</script>
          <span>）</span>
          <span>移项得到：</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="56.649ex" height="2.363ex" role="img" focusable="false"
                 viewBox="0 -750 25038.7 1044.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-5-TEX-I-1D44A"
                      d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"></path>
                <path id="MJX-5-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-5-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-5-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                <path id="MJX-5-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-5-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
                <path id="MJX-5-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path id="MJX-5-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path id="MJX-5-TEX-N-2026"
                      d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60ZM525 60Q525 84 542 102T585 120Q609 120 627 104T646 61Q646 36 629 18T586 0T543 17T525 60ZM972 60Q972 84 989 102T1032 120Q1056 120 1074 104T1093 61Q1093 36 1076 18T1033 0T990 17T972 60Z"></path>
                <path id="MJX-5-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-5-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path id="MJX-5-TEX-SO-2211"
                      d="M61 748Q64 750 489 750H913L954 640Q965 609 976 579T993 533T999 516H979L959 517Q936 579 886 621T777 682Q724 700 655 705T436 710H319Q183 710 183 709Q186 706 348 484T511 259Q517 250 513 244L490 216Q466 188 420 134T330 27L149 -187Q149 -188 362 -188Q388 -188 436 -188T506 -189Q679 -189 778 -162T936 -43Q946 -27 959 6H999L913 -249L489 -250Q65 -250 62 -248Q56 -246 56 -239Q56 -234 118 -161Q186 -81 245 -11L428 206Q428 207 242 462L57 717L56 728Q56 744 61 748Z"></path>
                <path id="MJX-5-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path>
                <path id="MJX-5-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                <path id="MJX-5-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-5-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-5-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-5-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="30" xlink:href="#MJX-5-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(1821.1,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-5-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-5-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-5-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="30" xlink:href="#MJX-5-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(3562.4,0)">
                    <use data-c="2B" xlink:href="#MJX-5-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(4562.6,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-5-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-5-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-5-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="31" xlink:href="#MJX-5-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(6383.7,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-5-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-5-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-5-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="31" xlink:href="#MJX-5-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(8125,0)">
                    <use data-c="2B" xlink:href="#MJX-5-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(9125.2,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-5-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-5-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-5-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="32" xlink:href="#MJX-5-TEX-N-32"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(10946.3,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-5-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-5-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-5-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="32" xlink:href="#MJX-5-TEX-N-32"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(12687.6,0)">
                    <use data-c="2B" xlink:href="#MJX-5-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(13687.8,0)">
                    <use data-c="2026" xlink:href="#MJX-5-TEX-N-2026"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(15082,0)">
                    <use data-c="2212" xlink:href="#MJX-5-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(16082.3,0)">
                    <use data-c="28" xlink:href="#MJX-5-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(16471.3,0)">
                    <use data-c="2211" xlink:href="#MJX-5-TEX-SO-2211"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(17693.9,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-5-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-5-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-5-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D457" xlink:href="#MJX-5-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(19452.8,0)">
                    <use data-c="29" xlink:href="#MJX-5-TEX-N-29"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(19841.8,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-5-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-5-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(21033,0)">
                    <use data-c="2B" xlink:href="#MJX-5-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(22033.2,0)">
                    <use data-c="2026" xlink:href="#MJX-5-TEX-N-2026"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(23483,0)">
                    <use data-c="3D" xlink:href="#MJX-5-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(24538.7,0)">
                    <use data-c="30" xlink:href="#MJX-5-TEX-N-30"></use>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>0</mn>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>0</mn>
                  </mrow>
                </msub>
                <mo>+</mo>
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <mo>+</mo>
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>2</mn>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>2</mn>
                  </mrow>
                </msub>
                <mo>+</mo>
                <mo>…</mo>
                <mo>−</mo>
                <mo stretchy="false">(</mo>
                <mo data-mjx-texclass="OP">∑</mo>
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>j</mi>
                  </mrow>
                </msub>
                <mo stretchy="false">)</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                  </mrow>
                </msub>
                <mo>+</mo>
                <mo>…</mo>
                <mo>=</mo>
                <mn>0</mn>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">W_{i,0}P_{i,0}+W_{i,1}P_{i,1}+W_{i,2}P_{i,2}+\ldots-(\sum W_{i,j})P_{i}+\ldots=0
          </script>
          <span>写成矩阵形式：</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="51.48ex" height="20.841ex" role="img" focusable="false"
                 viewBox="0 -4855.8 22754.1 9211.5" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -9.855ex;">
              <defs>
                <path id="MJX-6-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path>
                <path id="MJX-6-TEX-I-1D44A"
                      d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"></path>
                <path id="MJX-6-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-6-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-6-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                <path id="MJX-6-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path id="MJX-6-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path id="MJX-6-TEX-N-22EF"
                      d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250ZM525 250Q525 274 542 292T585 310Q609 310 627 294T646 251Q646 226 629 208T586 190T543 207T525 250ZM972 250Q972 274 989 292T1032 310Q1056 310 1074 294T1093 251Q1093 226 1076 208T1033 190T990 207T972 250Z"></path>
                <path id="MJX-6-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-6-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path id="MJX-6-TEX-SO-2211"
                      d="M61 748Q64 750 489 750H913L954 640Q965 609 976 579T993 533T999 516H979L959 517Q936 579 886 621T777 682Q724 700 655 705T436 710H319Q183 710 183 709Q186 706 348 484T511 259Q517 250 513 244L490 216Q466 188 420 134T330 27L149 -187Q149 -188 362 -188Q388 -188 436 -188T506 -189Q679 -189 778 -162T936 -43Q946 -27 959 6H999L913 -249L489 -250Q65 -250 62 -248Q56 -246 56 -239Q56 -234 118 -161Q186 -81 245 -11L428 206Q428 207 242 462L57 717L56 728Q56 744 61 748Z"></path>
                <path id="MJX-6-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path>
                <path id="MJX-6-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                <path id="MJX-6-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"></path>
                <path id="MJX-6-TEX-S4-23A1" d="M319 -645V1154H666V1070H403V-645H319Z"></path>
                <path id="MJX-6-TEX-S4-23A3" d="M319 -644V1155H403V-560H666V-644H319Z"></path>
                <path id="MJX-6-TEX-S4-23A2" d="M319 0V602H403V0H319Z"></path>
                <path id="MJX-6-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-6-TEX-N-22EE"
                      d="M78 30Q78 54 95 72T138 90Q162 90 180 74T199 31Q199 6 182 -12T139 -30T96 -13T78 30ZM78 440Q78 464 95 482T138 500Q162 500 180 484T199 441Q199 416 182 398T139 380T96 397T78 440ZM78 840Q78 864 95 882T138 900Q162 900 180 884T199 841Q199 816 182 798T139 780T96 797T78 840Z"></path>
                <path id="MJX-6-TEX-S4-23A4" d="M0 1070V1154H347V-645H263V1070H0Z"></path>
                <path id="MJX-6-TEX-S4-23A6" d="M263 -560V1155H347V-644H0V-560H263Z"></path>
                <path id="MJX-6-TEX-S4-23A5" d="M263 0V602H347V0H263Z"></path>
                <path id="MJX-6-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mrow">
                    <g data-mml-node="mo">
                      <use data-c="5B" xlink:href="#MJX-6-TEX-N-5B"></use>
                    </g>
                    <g data-mml-node="mtable" transform="translate(278,0)">
                      <g data-mml-node="mtr" transform="translate(0,22.1)">
                        <g data-mml-node="mtd">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D44A" xlink:href="#MJX-6-TEX-I-1D44A"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mi">
                                <use data-c="1D456" xlink:href="#MJX-6-TEX-I-1D456"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(345,0)">
                                <use data-c="2C" xlink:href="#MJX-6-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(623,0)">
                                <use data-c="30" xlink:href="#MJX-6-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mtd" transform="translate(2821.1,0)">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D44A" xlink:href="#MJX-6-TEX-I-1D44A"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mi">
                                <use data-c="1D456" xlink:href="#MJX-6-TEX-I-1D456"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(345,0)">
                                <use data-c="2C" xlink:href="#MJX-6-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(623,0)">
                                <use data-c="31" xlink:href="#MJX-6-TEX-N-31"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mtd" transform="translate(5642.2,0)">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D44A" xlink:href="#MJX-6-TEX-I-1D44A"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mi">
                                <use data-c="1D456" xlink:href="#MJX-6-TEX-I-1D456"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(345,0)">
                                <use data-c="2C" xlink:href="#MJX-6-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(623,0)">
                                <use data-c="32" xlink:href="#MJX-6-TEX-N-32"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mtd" transform="translate(8463.2,0)">
                          <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                            <g data-mml-node="mo">
                              <use data-c="22EF" xlink:href="#MJX-6-TEX-N-22EF"></use>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mtd" transform="translate(10635.2,0)">
                          <g data-mml-node="mo">
                            <use data-c="2212" xlink:href="#MJX-6-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(778,0)">
                            <use data-c="28" xlink:href="#MJX-6-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(1167,0)">
                            <use data-c="2211" xlink:href="#MJX-6-TEX-SO-2211"></use>
                          </g>
                          <g data-mml-node="msub" transform="translate(2389.7,0)">
                            <g data-mml-node="mi">
                              <use data-c="1D44A" xlink:href="#MJX-6-TEX-I-1D44A"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mi">
                                <use data-c="1D456" xlink:href="#MJX-6-TEX-I-1D456"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(345,0)">
                                <use data-c="2C" xlink:href="#MJX-6-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mi" transform="translate(623,0)">
                                <use data-c="1D457" xlink:href="#MJX-6-TEX-I-1D457"></use>
                              </g>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(4148.5,0)">
                            <use data-c="29" xlink:href="#MJX-6-TEX-N-29"></use>
                          </g>
                        </g>
                        <g data-mml-node="mtd" transform="translate(16172.8,0)">
                          <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                            <g data-mml-node="mo">
                              <use data-c="22EF" xlink:href="#MJX-6-TEX-N-22EF"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(17622.8,0)">
                      <use data-c="5D" xlink:href="#MJX-6-TEX-N-5D"></use>
                    </g>
                  </g>
                  <g data-mml-node="mrow" transform="translate(18067.4,0)">
                    <g data-mml-node="mo">
                      <use data-c="23A1" xlink:href="#MJX-6-TEX-S4-23A1" transform="translate(0,3701.8)"></use>
                      <use data-c="23A3" xlink:href="#MJX-6-TEX-S4-23A3" transform="translate(0,-3711.8)"></use>
                      <svg width="667" height="5813.5" y="-2656.8" x="0" viewBox="0 1453.4 667 5813.5">
                        <use data-c="23A2" xlink:href="#MJX-6-TEX-S4-23A2" transform="scale(1,14.486)"></use>
                      </svg>
                    </g>
                    <g data-mml-node="mtable" transform="translate(667,0)">
                      <g data-mml-node="mtr" transform="translate(0,4105.8)">
                        <g data-mml-node="mtd">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D443" xlink:href="#MJX-6-TEX-I-1D443"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mi">
                                <use data-c="1D456" xlink:href="#MJX-6-TEX-I-1D456"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(345,0)">
                                <use data-c="2C" xlink:href="#MJX-6-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(623,0)">
                                <use data-c="30" xlink:href="#MJX-6-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mtr" transform="translate(0,2668.6)">
                        <g data-mml-node="mtd">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D443" xlink:href="#MJX-6-TEX-I-1D443"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mi">
                                <use data-c="1D456" xlink:href="#MJX-6-TEX-I-1D456"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(345,0)">
                                <use data-c="2C" xlink:href="#MJX-6-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(623,0)">
                                <use data-c="31" xlink:href="#MJX-6-TEX-N-31"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mtr" transform="translate(0,1231.4)">
                        <g data-mml-node="mtd">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D443" xlink:href="#MJX-6-TEX-I-1D443"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mi">
                                <use data-c="1D456" xlink:href="#MJX-6-TEX-I-1D456"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(345,0)">
                                <use data-c="2C" xlink:href="#MJX-6-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(623,0)">
                                <use data-c="32" xlink:href="#MJX-6-TEX-N-32"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mtr" transform="translate(0,-755.8)">
                        <g data-mml-node="mtd" transform="translate(620.5,0)">
                          <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                            <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                              <g data-mml-node="mo">
                                <use data-c="22EE" xlink:href="#MJX-6-TEX-N-22EE"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mtr" transform="translate(0,-2155.8)">
                        <g data-mml-node="mtd" transform="translate(275.1,0)">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D443" xlink:href="#MJX-6-TEX-I-1D443"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mi">
                                <use data-c="1D456" xlink:href="#MJX-6-TEX-I-1D456"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mtr" transform="translate(0,-4105.8)">
                        <g data-mml-node="mtd" transform="translate(620.5,0)">
                          <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                            <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                              <g data-mml-node="mo">
                                <use data-c="22EE" xlink:href="#MJX-6-TEX-N-22EE"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(2186.1,0)">
                      <use data-c="23A4" xlink:href="#MJX-6-TEX-S4-23A4" transform="translate(0,3701.8)"></use>
                      <use data-c="23A6" xlink:href="#MJX-6-TEX-S4-23A6" transform="translate(0,-3711.8)"></use>
                      <svg width="667" height="5813.5" y="-2656.8" x="0" viewBox="0 1453.4 667 5813.5">
                        <use data-c="23A5" xlink:href="#MJX-6-TEX-S4-23A5" transform="scale(1,14.486)"></use>
                      </svg>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(21198.3,0)">
                    <use data-c="3D" xlink:href="#MJX-6-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(22254.1,0)">
                    <use data-c="30" xlink:href="#MJX-6-TEX-N-30"></use>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mrow data-mjx-texclass="INNER">
                  <mo data-mjx-texclass="OPEN">[</mo>
                  <mtable columnspacing="1em" rowspacing="4pt">
                    <mtr>
                      <mtd>
                        <msub>
                          <mi>W</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                            <mo>,</mo>
                            <mn>0</mn>
                          </mrow>
                        </msub>
                      </mtd>
                      <mtd>
                        <msub>
                          <mi>W</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                            <mo>,</mo>
                            <mn>1</mn>
                          </mrow>
                        </msub>
                      </mtd>
                      <mtd>
                        <msub>
                          <mi>W</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                            <mo>,</mo>
                            <mn>2</mn>
                          </mrow>
                        </msub>
                      </mtd>
                      <mtd>
                        <mrow data-mjx-texclass="ORD">
                          <mo>⋯</mo>
                        </mrow>
                      </mtd>
                      <mtd>
                        <mo>−</mo>
                        <mo stretchy="false">(</mo>
                        <mo data-mjx-texclass="OP">∑</mo>
                        <msub>
                          <mi>W</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                            <mo>,</mo>
                            <mi>j</mi>
                          </mrow>
                        </msub>
                        <mo stretchy="false">)</mo>
                      </mtd>
                      <mtd>
                        <mrow data-mjx-texclass="ORD">
                          <mo>⋯</mo>
                        </mrow>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo data-mjx-texclass="CLOSE">]</mo>
                </mrow>
                <mrow data-mjx-texclass="INNER">
                  <mo data-mjx-texclass="OPEN">[</mo>
                  <mtable columnspacing="1em" rowspacing="4pt">
                    <mtr>
                      <mtd>
                        <msub>
                          <mi>P</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                            <mo>,</mo>
                            <mn>0</mn>
                          </mrow>
                        </msub>
                      </mtd>
                    </mtr>
                    <mtr>
                      <mtd>
                        <msub>
                          <mi>P</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                            <mo>,</mo>
                            <mn>1</mn>
                          </mrow>
                        </msub>
                      </mtd>
                    </mtr>
                    <mtr>
                      <mtd>
                        <msub>
                          <mi>P</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                            <mo>,</mo>
                            <mn>2</mn>
                          </mrow>
                        </msub>
                      </mtd>
                    </mtr>
                    <mtr>
                      <mtd>
                        <mrow data-mjx-texclass="ORD">
                          <mrow data-mjx-texclass="ORD">
                            <mo>⋮</mo>
                          </mrow>
                        </mrow>
                      </mtd>
                    </mtr>
                    <mtr>
                      <mtd>
                        <msub>
                          <mi>P</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                          </mrow>
                        </msub>
                      </mtd>
                    </mtr>
                    <mtr>
                      <mtd>
                        <mrow data-mjx-texclass="ORD">
                          <mrow data-mjx-texclass="ORD">
                            <mo>⋮</mo>
                          </mrow>
                        </mrow>
                      </mtd>
                    </mtr>
                  </mtable>
                  <mo data-mjx-texclass="CLOSE">]</mo>
                </mrow>
                <mo>=</mo>
                <mn>0</mn>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">\begin{bmatrix}W_{i,0}&W_{i,1}&W_{i,2}&{\cdots} &-(\sum W_{i,j})&{\cdots}\end{bmatrix}
\begin{bmatrix}P_{i,0}\\
P_{i,1}\\
P_{i,2}\\
{\vdots}\\
P_{i}\\
{\vdots}\\
\end{bmatrix}=0
          </script>
          <span>将所有顶点都表示出来，就可以能得到</span>
          <img src="https://img-blog.csdnimg.cn/61b03e677a154f4c999c93e84141ee9e.png#pic_center"
               referrerpolicy="no-referrer" alt="主要线性方程组"></p>
        <p><span>(其中u0 Bound v0 Bound等等，代表的是边界顶点固定到平面后的坐标)</span>
          <span>可简写为方程</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="8.359ex" height="1.805ex" role="img" focusable="false"
                 viewBox="0 -716 3694.6 798" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.186ex;">
              <defs>
                <path id="MJX-7-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                <path id="MJX-7-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"></path>
                <path id="MJX-7-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path id="MJX-7-TEX-I-1D435"
                      d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="1D434" xlink:href="#MJX-7-TEX-I-1D434"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(750,0)">
                    <use data-c="1D44B" xlink:href="#MJX-7-TEX-I-1D44B"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1879.8,0)">
                    <use data-c="3D" xlink:href="#MJX-7-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(2935.6,0)">
                    <use data-c="1D435" xlink:href="#MJX-7-TEX-I-1D435"></use>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi>A</mi>
                <mi>X</mi>
                <mo>=</mo>
                <mi>B</mi>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">AX=B</script>
          <span>在我的代码中我把等号左边的稀疏矩阵命名为</span><strong><span>A</span></strong><span>,等号右边的矩阵为</span><strong><span>B</span></strong><span>,中间的那个矩阵命名为</span><strong><span>X</span></strong><span>，其中代表u轴坐标的一列被我命名为</span><strong><span>Xu</span></strong><span>，代表v轴坐标的一列被我命名为</span><strong><span>Xv</span></strong><span>,并分别使用Eigen数学库中求解稀疏矩阵的方法求解</span><strong><span>Xu</span></strong><span>和</span><strong><span>Xv</span></strong>
        </p>
        <p>
          <strong><span>而什么样的权重，能使该线性方程组解出的uv图相比原网格体形变更小，更合理，就是后面权重计算的任务</span></strong>
        </p>
        <h3 id="权重计算"><span>权重计算</span></h3>
        <p><span>对于均匀权重的计算，不必过度赘述。直接来到Floater权重的计算</span></p>
        <p><strong><span>Floater权重的核心思想是：</span></strong>
          <strong><span>对于每个非边界顶点</span>
            <mjx-container class="MathJax" jax="SVG" style="position: relative;">
              <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                   viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                   style="vertical-align: -0.357ex;">
                <defs>
                  <path id="MJX-38-TEX-I-1D443"
                        d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                  <path id="MJX-38-TEX-I-1D456"
                        d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="msub">
                      <g data-mml-node="mi">
                        <use data-c="1D443" xlink:href="#MJX-38-TEX-I-1D443"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                        <use data-c="1D456" xlink:href="#MJX-38-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <mjx-assistive-mml unselectable="on" display="inline">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <msub>
                    <mi>P</mi>
                    <mi>i</mi>
                  </msub>
                </math>
              </mjx-assistive-mml>
            </mjx-container>
            <script type="math/tex">P_i</script>
            <span>，新建一个以</span>
            <mjx-container class="MathJax" jax="SVG" style="position: relative;">
              <svg xmlns="http://www.w3.org/2000/svg" width="5.629ex" height="3.107ex" role="img" focusable="false"
                   viewBox="0 -1086 2488 1373.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                   style="vertical-align: -0.65ex;">
                <defs>
                  <path id="MJX-9-TEX-I-1D443"
                        d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                  <path id="MJX-9-TEX-I-1D456"
                        d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                  <path id="MJX-9-TEX-N-2C"
                        d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                  <path id="MJX-9-TEX-N-30"
                        d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                  <path id="MJX-9-TEX-N-20D7"
                        d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                      <g data-mml-node="mover">
                        <g data-mml-node="mrow">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D443" xlink:href="#MJX-9-TEX-I-1D443"></use>
                            </g>
                            <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                              <use data-c="1D456" xlink:href="#MJX-9-TEX-I-1D456"></use>
                            </g>
                          </g>
                          <g data-mml-node="msub" transform="translate(969,0)">
                            <g data-mml-node="mi">
                              <use data-c="1D443" xlink:href="#MJX-9-TEX-I-1D443"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mi">
                                <use data-c="1D456" xlink:href="#MJX-9-TEX-I-1D456"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(345,0)">
                                <use data-c="2C" xlink:href="#MJX-9-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(623,0)">
                                <use data-c="30" xlink:href="#MJX-9-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1244,272) translate(-250 0)">
                          <use data-c="20D7" xlink:href="#MJX-9-TEX-N-20D7"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <mjx-assistive-mml unselectable="on" display="inline">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <mrow data-mjx-texclass="ORD">
                    <mover>
                      <mrow>
                        <msub>
                          <mi>P</mi>
                          <mi>i</mi>
                        </msub>
                        <msub>
                          <mi>P</mi>
                          <mrow data-mjx-texclass="ORD">
                            <mi>i</mi>
                            <mo>,</mo>
                            <mn>0</mn>
                          </mrow>
                        </msub>
                      </mrow>
                      <mo stretchy="false">→</mo>
                    </mover>
                  </mrow>
                </math>
              </mjx-assistive-mml>
            </mjx-container>
            <script type="math/tex">\vec{P_iP_{i,0}}</script>
            <span>(</span>
            <mjx-container class="MathJax" jax="SVG" style="position: relative;">
              <svg xmlns="http://www.w3.org/2000/svg" width="3.437ex" height="2.195ex" role="img" focusable="false"
                   viewBox="0 -683 1519.1 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                   style="vertical-align: -0.65ex;">
                <defs>
                  <path id="MJX-10-TEX-I-1D443"
                        d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                  <path id="MJX-10-TEX-I-1D456"
                        d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                  <path id="MJX-10-TEX-N-2C"
                        d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                  <path id="MJX-10-TEX-N-30"
                        d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="msub">
                      <g data-mml-node="mi">
                        <use data-c="1D443" xlink:href="#MJX-10-TEX-I-1D443"></use>
                      </g>
                      <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use data-c="1D456" xlink:href="#MJX-10-TEX-I-1D456"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(345,0)">
                          <use data-c="2C" xlink:href="#MJX-10-TEX-N-2C"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(623,0)">
                          <use data-c="30" xlink:href="#MJX-10-TEX-N-30"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <mjx-assistive-mml unselectable="on" display="inline">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <msub>
                    <mi>P</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mi>i</mi>
                      <mo>,</mo>
                      <mn>0</mn>
                    </mrow>
                  </msub>
                </math>
              </mjx-assistive-mml>
            </mjx-container>
            <script type="math/tex">P_{i,0}</script>
            <span>可以为</span>
            <mjx-container class="MathJax" jax="SVG" style="position: relative;">
              <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                   viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                   style="vertical-align: -0.357ex;">
                <defs>
                  <path id="MJX-11-TEX-I-1D443"
                        d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                  <path id="MJX-11-TEX-I-1D456"
                        d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="msub">
                      <g data-mml-node="mi">
                        <use data-c="1D443" xlink:href="#MJX-11-TEX-I-1D443"></use>
                      </g>
                      <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use data-c="1D456" xlink:href="#MJX-11-TEX-I-1D456"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <mjx-assistive-mml unselectable="on" display="inline">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <msub>
                    <mi>P</mi>
                    <mrow data-mjx-texclass="ORD">
                      <mi>i</mi>
                    </mrow>
                  </msub>
                </math>
              </mjx-assistive-mml>
            </mjx-container>
            <script type="math/tex">P_{i}</script>
            <span>的任意邻居顶点)方向为x轴的平面直角坐标系，并把它放到该坐标系的原点，然后把它的某一个邻居顶点将点的1-邻域保角度比例、保长度地映射到该平面区域。求得在此坐标系下</span>
            <mjx-container class="MathJax" jax="SVG" style="position: relative;">
              <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                   viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                   style="vertical-align: -0.357ex;">
                <defs>
                  <path id="MJX-38-TEX-I-1D443"
                        d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                  <path id="MJX-38-TEX-I-1D456"
                        d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="msub">
                      <g data-mml-node="mi">
                        <use data-c="1D443" xlink:href="#MJX-38-TEX-I-1D443"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                        <use data-c="1D456" xlink:href="#MJX-38-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <mjx-assistive-mml unselectable="on" display="inline">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <msub>
                    <mi>P</mi>
                    <mi>i</mi>
                  </msub>
                </math>
              </mjx-assistive-mml>
            </mjx-container>
            <script type="math/tex">P_i</script>
            <span>点相对于其邻居顶点的重心权重并填入矩阵A,这样解出的uv图就能尽量吻合原本的形状</span></strong></p>
        <p><span>即</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25.398ex" height="2.361ex" role="img" focusable="false"
                 viewBox="0 -749.5 11226.1 1043.7" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-13-TEX-N-7C"
                      d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z"></path>
                <path id="MJX-13-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-13-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-13-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-13-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path>
                <path id="MJX-13-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-13-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path id="MJX-13-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mo" transform="translate(0 -0.5)">
                    <use data-c="7C" xlink:href="#MJX-13-TEX-N-7C"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(278,0) translate(0 -0.5)">
                    <use data-c="7C" xlink:href="#MJX-13-TEX-N-7C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(556,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-13-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-13-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-13-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D457" xlink:href="#MJX-13-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(2235.1,0)">
                    <use data-c="2212" xlink:href="#MJX-13-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(3235.3,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-13-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-13-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(4204.3,0) translate(0 -0.5)">
                    <use data-c="7C" xlink:href="#MJX-13-TEX-N-7C"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(4482.3,0) translate(0 -0.5)">
                    <use data-c="7C" xlink:href="#MJX-13-TEX-N-7C"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(5038,0)">
                    <use data-c="3D" xlink:href="#MJX-13-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(6093.8,0) translate(0 -0.5)">
                    <use data-c="7C" xlink:href="#MJX-13-TEX-N-7C"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(6371.8,0) translate(0 -0.5)">
                    <use data-c="7C" xlink:href="#MJX-13-TEX-N-7C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(6649.8,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-13-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(861,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-13-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-13-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D457" xlink:href="#MJX-13-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(8514.9,0)">
                    <use data-c="2212" xlink:href="#MJX-13-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(9515.1,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-13-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(861,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-13-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(10670.1,0) translate(0 -0.5)">
                    <use data-c="7C" xlink:href="#MJX-13-TEX-N-7C"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(10948.1,0) translate(0 -0.5)">
                    <use data-c="7C" xlink:href="#MJX-13-TEX-N-7C"></use>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mo stretchy="false">|</mo>
                <mo stretchy="false">|</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>j</mi>
                  </mrow>
                </msub>
                <mo>−</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                  </mrow>
                </msub>
                <mo stretchy="false">|</mo>
                <mo stretchy="false">|</mo>
                <mo>=</mo>
                <mo stretchy="false">|</mo>
                <mo stretchy="false">|</mo>
                <msub>
                  <mi>X</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>j</mi>
                  </mrow>
                </msub>
                <mo>−</mo>
                <msub>
                  <mi>X</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                  </mrow>
                </msub>
                <mo stretchy="false">|</mo>
                <mo stretchy="false">|</mo>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">||P_{i,j}-P_{i}||=||X_{i,j}-X_{i}||</script>
          <span>和</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="46.894ex" height="2.347ex" role="img" focusable="false"
                 viewBox="0 -750 20727.2 1037.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-14-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                <path id="MJX-14-TEX-I-1D45B"
                      d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-14-TEX-I-1D454"
                      d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"></path>
                <path id="MJX-14-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path id="MJX-14-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-14-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-14-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-14-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
                <path id="MJX-14-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-14-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path id="MJX-14-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                <path id="MJX-14-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path id="MJX-14-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path id="MJX-14-TEX-I-1D70B"
                      d="M132 -11Q98 -11 98 22V33L111 61Q186 219 220 334L228 358H196Q158 358 142 355T103 336Q92 329 81 318T62 297T53 285Q51 284 38 284Q19 284 19 294Q19 300 38 329T93 391T164 429Q171 431 389 431Q549 431 553 430Q573 423 573 402Q573 371 541 360Q535 358 472 358H408L405 341Q393 269 393 222Q393 170 402 129T421 65T431 37Q431 20 417 5T381 -10Q370 -10 363 -7T347 17T331 77Q330 86 330 121Q330 170 339 226T357 318T367 358H269L268 354Q268 351 249 275T206 114T175 17Q164 -11 132 -11Z"></path>
                <path id="MJX-14-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"></path>
                <path id="MJX-14-TEX-N-2F"
                      d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                <path id="MJX-14-TEX-I-1D703"
                      d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="1D44E" xlink:href="#MJX-14-TEX-I-1D44E"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(529,0)">
                    <use data-c="1D45B" xlink:href="#MJX-14-TEX-I-1D45B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1129,0)">
                    <use data-c="1D454" xlink:href="#MJX-14-TEX-I-1D454"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1606,0)">
                    <use data-c="28" xlink:href="#MJX-14-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(1995,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-14-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-14-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-14-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-14-TEX-I-1D458"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1144,0)">
                        <use data-c="2212" xlink:href="#MJX-14-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1922,0)">
                        <use data-c="31" xlink:href="#MJX-14-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(4432.6,0)">
                    <use data-c="2C" xlink:href="#MJX-14-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(4877.3,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-14-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-14-TEX-I-1D456"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(5846.2,0)">
                    <use data-c="2C" xlink:href="#MJX-14-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(6290.9,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-14-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-14-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-14-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-14-TEX-I-1D458"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(7824.8,0)">
                    <use data-c="29" xlink:href="#MJX-14-TEX-N-29"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(8491.6,0)">
                    <use data-c="3D" xlink:href="#MJX-14-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(9547.4,0)">
                    <use data-c="32" xlink:href="#MJX-14-TEX-N-32"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(10047.4,0)">
                    <use data-c="1D70B" xlink:href="#MJX-14-TEX-I-1D70B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(10617.4,0)">
                    <use data-c="1D44E" xlink:href="#MJX-14-TEX-I-1D44E"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(11146.4,0)">
                    <use data-c="1D45B" xlink:href="#MJX-14-TEX-I-1D45B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(11746.4,0)">
                    <use data-c="1D454" xlink:href="#MJX-14-TEX-I-1D454"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(12223.4,0)">
                    <use data-c="28" xlink:href="#MJX-14-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(12612.4,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-14-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(861,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-14-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-14-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-14-TEX-I-1D458"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1144,0)">
                        <use data-c="2212" xlink:href="#MJX-14-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1922,0)">
                        <use data-c="31" xlink:href="#MJX-14-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(15236,0)">
                    <use data-c="2C" xlink:href="#MJX-14-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(15680.7,0)">
                    <use data-c="1D44B" xlink:href="#MJX-14-TEX-I-1D44B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(16532.7,0)">
                    <use data-c="1D456" xlink:href="#MJX-14-TEX-I-1D456"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(16877.7,0)">
                    <use data-c="2C" xlink:href="#MJX-14-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(17322.3,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-14-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(861,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-14-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-14-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-14-TEX-I-1D458"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(19042.3,0)">
                    <use data-c="29" xlink:href="#MJX-14-TEX-N-29"></use>
                  </g>
                  <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(19431.3,0)">
                    <g data-mml-node="mo">
                      <use data-c="2F" xlink:href="#MJX-14-TEX-N-2F"></use>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(19931.3,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D703" xlink:href="#MJX-14-TEX-I-1D703"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(502,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-14-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi>a</mi>
                <mi>n</mi>
                <mi>g</mi>
                <mo stretchy="false">(</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                    <mo>−</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <mo>,</mo>
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
                <mo>,</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                  </mrow>
                </msub>
                <mo stretchy="false">)</mo>
                <mo>=</mo>
                <mn>2</mn>
                <mi>π</mi>
                <mi>a</mi>
                <mi>n</mi>
                <mi>g</mi>
                <mo stretchy="false">(</mo>
                <msub>
                  <mi>X</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                    <mo>−</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <mo>,</mo>
                <mi>X</mi>
                <mi>i</mi>
                <mo>,</mo>
                <msub>
                  <mi>X</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                  </mrow>
                </msub>
                <mo stretchy="false">)</mo>
                <mrow data-mjx-texclass="ORD">
                  <mo>/</mo>
                </mrow>
                <msub>
                  <mi>θ</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">ang(P_{i,k-1},P_i,P_{i,k})=2\pi ang(X_{i,k-1},Xi,X_{i,k})/\theta_i</script>
        </p>
        <p><span>（</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.613ex" height="1.902ex" role="img" focusable="false"
                 viewBox="0 -683 1155 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-20-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"></path>
                <path id="MJX-20-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-20-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(861,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-20-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>X</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">X_i</script>
          <span>和</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.717ex" height="2.211ex" role="img" focusable="false"
                 viewBox="0 -683 1642.9 977.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-16-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"></path>
                <path id="MJX-16-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-16-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-16-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-16-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(861,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-16-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-16-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D457" xlink:href="#MJX-16-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>X</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>j</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">X_{i,j}</script>
          <span>分别表示原网格体上的中心顶点和其邻居顶点，</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                 viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-38-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-38-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-38-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-38-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_i</script>
          <span>和</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.296ex" height="2.211ex" role="img" focusable="false"
                 viewBox="0 -683 1456.9 977.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-18-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-18-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-18-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-18-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-18-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-18-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-18-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D457" xlink:href="#MJX-18-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>j</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_{i,j}</script>
          <span>分别表示“拍平”后的中心顶点和其邻居顶点，其中</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.801ex" height="1.952ex" role="img" focusable="false"
                 viewBox="0 -705 796 862.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-19-TEX-I-1D703"
                      d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path>
                <path id="MJX-19-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D703" xlink:href="#MJX-19-TEX-I-1D703"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(502,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-19-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>θ</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">\theta_i</script>
          <span>为中心顶点</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.613ex" height="1.902ex" role="img" focusable="false"
                 viewBox="0 -683 1155 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-20-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"></path>
                <path id="MJX-20-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-20-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(861,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-20-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>X</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">X_i</script>
          <span>与其邻居顶点</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.891ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 1719.9 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-21-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"></path>
                <path id="MJX-21-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-21-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-21-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-21-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(861,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-21-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-21-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-21-TEX-I-1D458"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>X</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">X_{i,k}</script>
          <span>组成的夹角的总和）</span></p>
        <p><strong><span>求解</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                 viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-38-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-38-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-38-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-38-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_i</script>
          <span>点相对于其邻居顶点的重心权重的方法：</span></strong>
          <span>首先，对于每条</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.306ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 2345.2 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-40-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-40-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-40-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-40-TEX-I-1D459"
                      d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(969,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-40-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D459" xlink:href="#MJX-40-TEX-I-1D459"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>l</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_iP_{i,l}</script>
          <span>直线，（</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.306ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 2345.2 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-40-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-40-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-40-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-40-TEX-I-1D459"
                      d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(969,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-40-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D459" xlink:href="#MJX-40-TEX-I-1D459"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>l</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_iP_{i,l}</script>
          <span>代指所有</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                 viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-38-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-38-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-38-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-38-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_i</script>
          <span>点与其邻居点的连线）都要寻找相邻的两个邻居顶点</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.515ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 2437.6 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-33-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-33-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-33-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-33-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
                <path id="MJX-33-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-33-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-33-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-33-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-33-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-33-TEX-I-1D458"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1144,0)">
                        <use data-c="2212" xlink:href="#MJX-33-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1922,0)">
                        <use data-c="31" xlink:href="#MJX-33-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                    <mo>−</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_{i,k-1}</script>
          <span>和</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.47ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 1533.9 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-34-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-34-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-34-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-34-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-34-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-34-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-34-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-34-TEX-I-1D458"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_{i,k}</script>
          <span>，使得线段</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="8.985ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 3971.5 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-28-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-28-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-28-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-28-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
                <path id="MJX-28-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-28-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-28-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-28-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-28-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-28-TEX-I-1D458"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1144,0)">
                        <use data-c="2212" xlink:href="#MJX-28-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1922,0)">
                        <use data-c="31" xlink:href="#MJX-28-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(2437.6,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-28-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-28-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-28-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-28-TEX-I-1D458"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                    <mo>−</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_{i,k-1}P_{i,k}</script>
          <span>与直线</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.306ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 2345.2 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-40-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-40-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-40-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-40-TEX-I-1D459"
                      d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(969,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-40-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D459" xlink:href="#MJX-40-TEX-I-1D459"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>l</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_iP_{i,l}</script>
          <span>相交，组成三角形</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14.11ex" height="2.27ex" role="img" focusable="false"
                 viewBox="0 -716 6236.8 1003.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-37-TEX-N-25B3"
                      d="M75 0L72 2Q69 3 67 5T62 11T59 20Q59 24 62 30Q65 37 245 370T428 707Q428 708 430 710T436 714T444 716Q451 716 455 712Q459 710 644 368L828 27V20Q828 7 814 0H75ZM610 347L444 653Q443 653 278 347T113 40H775Q775 42 610 347Z"></path>
                <path id="MJX-37-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-37-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-37-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-37-TEX-I-1D459"
                      d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path>
                <path id="MJX-37-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
                <path id="MJX-37-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-37-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="25B3" xlink:href="#MJX-37-TEX-N-25B3"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(889,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-37-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-37-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-37-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D459" xlink:href="#MJX-37-TEX-I-1D459"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(2265.2,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-37-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-37-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-37-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-37-TEX-I-1D458"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1144,0)">
                        <use data-c="2212" xlink:href="#MJX-37-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1922,0)">
                        <use data-c="31" xlink:href="#MJX-37-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(4702.9,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-37-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-37-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-37-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-37-TEX-I-1D458"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi mathvariant="normal">△</mi>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>l</mi>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                    <mo>−</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">\triangle P_{i,l}P_{i,k-1}P_{i,k}</script>
          <span>，并在此三角形中求得其中心顶点</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                 viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-38-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-38-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-38-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-38-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_i</script>
          <span>的重心权重{a,b,c},分别对应{</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14.111ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 6237.1 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-32-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-32-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-32-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-32-TEX-I-1D459"
                      d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path>
                <path id="MJX-32-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
                <path id="MJX-32-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-32-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-32-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-32-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-32-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D459" xlink:href="#MJX-32-TEX-I-1D459"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1376.2,0)">
                    <use data-c="2C" xlink:href="#MJX-32-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(1820.9,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-32-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-32-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-32-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-32-TEX-I-1D458"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1144,0)">
                        <use data-c="2212" xlink:href="#MJX-32-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1922,0)">
                        <use data-c="31" xlink:href="#MJX-32-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(4258.5,0)">
                    <use data-c="2C" xlink:href="#MJX-32-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(4703.2,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-32-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-32-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-32-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-32-TEX-I-1D458"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>l</mi>
                  </mrow>
                </msub>
                <mo>,</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                    <mo>−</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <mo>,</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_{i,l},P_{i,k-1},P_{i,k}</script>
          <span>}这三个顶点。</span>
          <span>注意，我们可以使用叉乘的方法来判断</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.515ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 2437.6 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-33-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-33-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-33-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-33-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
                <path id="MJX-33-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-33-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-33-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-33-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-33-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-33-TEX-I-1D458"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1144,0)">
                        <use data-c="2212" xlink:href="#MJX-33-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1922,0)">
                        <use data-c="31" xlink:href="#MJX-33-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                    <mo>−</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_{i,k-1}</script>
          <span>和</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.47ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 1533.9 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-34-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-34-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-34-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-34-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-34-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-34-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-34-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-34-TEX-I-1D458"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_{i,k}</script>
          <span>是否在直线</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.306ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 2345.2 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-40-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-40-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-40-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-40-TEX-I-1D459"
                      d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(969,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-40-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D459" xlink:href="#MJX-40-TEX-I-1D459"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>l</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_iP_{i,l}</script>
          <span>两侧；也可以直接计算重心权重，如果重心权重a,b,c的值都在(0,1)区间，那么也可以说明</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                 viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-38-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-38-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-38-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-38-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_i</script>
          <span>在三角形</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14.11ex" height="2.27ex" role="img" focusable="false"
                 viewBox="0 -716 6236.8 1003.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-37-TEX-N-25B3"
                      d="M75 0L72 2Q69 3 67 5T62 11T59 20Q59 24 62 30Q65 37 245 370T428 707Q428 708 430 710T436 714T444 716Q451 716 455 712Q459 710 644 368L828 27V20Q828 7 814 0H75ZM610 347L444 653Q443 653 278 347T113 40H775Q775 42 610 347Z"></path>
                <path id="MJX-37-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-37-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-37-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-37-TEX-I-1D459"
                      d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path>
                <path id="MJX-37-TEX-I-1D458"
                      d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path>
                <path id="MJX-37-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-37-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="25B3" xlink:href="#MJX-37-TEX-N-25B3"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(889,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-37-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-37-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-37-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D459" xlink:href="#MJX-37-TEX-I-1D459"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(2265.2,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-37-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-37-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-37-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-37-TEX-I-1D458"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1144,0)">
                        <use data-c="2212" xlink:href="#MJX-37-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1922,0)">
                        <use data-c="31" xlink:href="#MJX-37-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(4702.9,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-37-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-37-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-37-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D458" xlink:href="#MJX-37-TEX-I-1D458"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi mathvariant="normal">△</mi>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>l</mi>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                    <mo>−</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>k</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">\triangle P_{i,l}P_{i,k-1}P_{i,k}</script>
          <span>内部。</span>
          <img src="https://img-blog.csdnimg.cn/8a558d805ce74220bed47af4b1bd6ec2.png#pic_center"
               referrerpolicy="no-referrer" alt="在这里插入图片描述"></p>
        <p><span>假设我们遍历到了某个中心顶点</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.192ex" height="1.902ex" role="img" focusable="false"
                 viewBox="0 -683 969 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-38-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-38-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-38-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-38-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_i</script>
          <span>,它有</span><strong><span>4</span></strong><span>个邻居顶点，分别是</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.765ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 7410.3 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-39-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-39-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-39-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-39-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                <path id="MJX-39-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path id="MJX-39-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path id="MJX-39-TEX-N-33"
                      d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-39-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-39-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-39-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="30" xlink:href="#MJX-39-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1519.1,0)">
                    <use data-c="2C" xlink:href="#MJX-39-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(1963.7,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-39-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-39-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-39-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="31" xlink:href="#MJX-39-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(3482.8,0)">
                    <use data-c="2C" xlink:href="#MJX-39-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(3927.5,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-39-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-39-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-39-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="32" xlink:href="#MJX-39-TEX-N-32"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(5446.6,0)">
                    <use data-c="2C" xlink:href="#MJX-39-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(5891.2,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-39-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-39-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-39-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(623,0)">
                        <use data-c="33" xlink:href="#MJX-39-TEX-N-33"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>0</mn>
                  </mrow>
                </msub>
                <mo>,</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>1</mn>
                  </mrow>
                </msub>
                <mo>,</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>2</mn>
                  </mrow>
                </msub>
                <mo>,</mo>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mn>3</mn>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_{i,0},P_{i,1},P_{i,2},P_{i,3}</script>
          <span>,那么我们就创建一个</span><strong><span>4*4</span></strong><span>的矩阵</span><strong><span>Mu</span></strong><span>(读做希腊字母μ)，把遍历</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.306ex" height="2.195ex" role="img" focusable="false"
                 viewBox="0 -683 2345.2 970.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.65ex;">
              <defs>
                <path id="MJX-40-TEX-I-1D443"
                      d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path>
                <path id="MJX-40-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-40-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-40-TEX-I-1D459"
                      d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(675,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                    </g>
                  </g>
                  <g data-mml-node="msub" transform="translate(969,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D443" xlink:href="#MJX-40-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-40-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-40-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D459" xlink:href="#MJX-40-TEX-I-1D459"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>P</mi>
                  <mi>i</mi>
                </msub>
                <msub>
                  <mi>P</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>l</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">P_iP_{i,l}</script>
          <span>直线时，得到的权重{a,b,c},分别填到</span><strong><span>Mu</span></strong><span>的第l列的第j行，第k-1行和第k行。然后按行求和得到个列向量</span><strong><span>Sum_mu</span></strong>
          <img src="https://img-blog.csdnimg.cn/7782c5fad92e49e6a998fc6176334404.png#pic_center"
               referrerpolicy="no-referrer" alt="在这里插入图片描述"></p>
        <p><span>矩阵A中，权重</span>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.979ex" height="2.211ex" role="img" focusable="false"
                 viewBox="0 -683 1758.9 977.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-41-TEX-I-1D44A"
                      d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"></path>
                <path id="MJX-41-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-41-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path id="MJX-41-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44A" xlink:href="#MJX-41-TEX-I-1D44A"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(977,-150) scale(0.707)" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-41-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="2C" xlink:href="#MJX-41-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(623,0)">
                        <use data-c="1D457" xlink:href="#MJX-41-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <mjx-assistive-mml unselectable="on" display="inline">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <msub>
                  <mi>W</mi>
                  <mrow data-mjx-texclass="ORD">
                    <mi>i</mi>
                    <mo>,</mo>
                    <mi>j</mi>
                  </mrow>
                </msub>
              </math>
            </mjx-assistive-mml>
          </mjx-container>
          <script type="math/tex">W_{i,j}</script>
          <span>的计算代码如下(*vertex为当前遍历到的中心顶点 neibors为其邻居顶点)</span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang=""><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang=""><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div
          role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div
          class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div
          class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline"
                                                                    style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>Eigen::VectorXd Sum_mu = Mu.rowwise().sum();//综合邻居权重</span></pre></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>size_t size = neibors.size();</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>double sum_weight = 0;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>for (size_t n = 0; n&lt; size; n++)</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>{</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-tab"
                                                                                                role="presentation"
                                                                                                cm-text="	">    </span>double sum_mu = Sum_mu[n];</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation"
                                                                           cm-text="	">    </span>double Wij = sum_mu / n_neibors;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation"
                                                                           cm-text="	">    </span>sum_weight += Wij;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation"
                                                                           cm-text="	">    </span>Eigen::Triplet&lt;double&gt; t((*vertex)-&gt;index(), (*neibors.at(n))-&gt;index(), Wij);</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation"
                                                                           cm-text="	">    </span>triplet_list.push_back(t);</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>}</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span>Eigen::Triplet&lt;double&gt; t((*vertex)-&gt;index(), (*vertex)-&gt;index(), -sum_weight);</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>triplet_list.push_back(t);</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 295px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 295px;"></div></div></div></pre>
        <h2 id="作业中遇到的坑"><span>作业中遇到的坑</span></h2>
        <p>
          <span>①提前setPositon，把网格体的边界顶点固定了，没有用原始网格体数据，导致后面计算角度时出错，debug了很久才找到原因</span>
          <span>②判定三角形时候出错，导致计算出来的A矩阵存在not a number的问题</span></p>
        <h2 id="作业效果图"><span>作业效果图</span></h2>
        <h3 id="均匀权重"><span>均匀权重</span></h3>
        <p><span>猫头模型离散网格均匀权重参数化效果图（如果发现是反的，就拖拽旋转一下它）</span>
          <img src="https://img-blog.csdnimg.cn/365a49bdebe241b983cc245090b8784d.png#pic_center"
               referrerpolicy="no-referrer" alt="在这里插入图片描述">
          <span>半球模型均匀权重离散网格参数化效果图</span>
          <img src="https://img-blog.csdnimg.cn/92f4f111ef7f48c3a3b2c63b38d0d0d6.png#pic_center"
               referrerpolicy="no-referrer" alt="在这里插入图片描述"></p>
        <h3 id="floater权重"><span>Floater权重</span></h3>
        <p><span>猫头模型离散网格Floater权重参数化效果图（如果发现是反的，就拖拽旋转一下它）</span>
          <img src="https://img-blog.csdnimg.cn/ae01bf9cd7e3498c9dcdf8a49e1f3f69.png#pic_center"
               referrerpolicy="no-referrer" alt="在这里插入图片描述">
          <span>半球模型离散网格Floater权重参数化效果图</span>
          <img src="https://img-blog.csdnimg.cn/33cb59bd7c06476a84c1281fb5aafbf4.png#pic_center"
               referrerpolicy="no-referrer" alt="在这里插入图片描述"></p>
        <h1 id="我的作业答案和代码"><span>我的作业答案和代码：</span></h1>
        <p><a
          href="https://github.com/CGandGameEngineLearner/GAMES301-homework-answer"><span>games301作业1答案</span></a>
        </p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnicalArticle1'
}
</script>

<style scoped>

</style>
