import React, { memo } from 'react';
import './App.css';

const Purpose = memo(() => {
    return (
        <>
            <h3 className="upper-block">로렘입숨(Lorem Ipsum)?</h3>
            <div>
                <p>
                    출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 
                    최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을 
                    그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다.
                </p>
                <p>
                    로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는 않는다. 문서에서 텍스트가 보이면 사람들은 전체적인 
                    프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서 출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을 맞추기 위해 로렘 입숨을 사용한다.
                </p>
                <p>
                    로렘 입숨은 영어에서 사용하는 문자들의 전형적인 분포에 근접하다고도 하는데, 이 점 때문에 프레젠테이션으로 초점을 이동하는 데에도 도움을 준다.
                </p>
                <p>
                    가장 일반적인 로렘 입숨 텍스트는 다음과 같다.    
                </p>

            </div>
            <div className="border">
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <br></br>
            <h3>사용하는 이유</h3>
            <p>
                문서 디자인에 의미있는 글을 담으면 사람들은 양식을 보지 않고 글 내용에 집중하는 경향이 있다. 
                간단하게 말해 글자가 어떤지 보지 않고 내용을 읽는 것이다. 그래서 디자인을 보여주는 데 집중하고자 어딘가 라틴어처럼 그럴듯해 보이지만 
                실질적인 의미가 없는 단어를 조합해서 만든 글이다. 물론 의미없이 아무런 글자를 무차별적으로 입력할 수도 있다. 
                그러나 그런 텍스트가 보여주는 심미적인 실루엣은 디자인 종사자에게 가히 끔찍하게 느껴진다. 그렇기에 적당히 정갈하면서도 전 세계 어떤 모국어 화자도 
                무슨 내용인지 이해할 수 없는(달리 말해 주의를 빼앗기지 않을) 로렘 입숨은 충분히 효용성과 그 가치가 있다. 
                로렘 입숨은 키케로의 최고선악론(De finibus bonorum et malorum) 중 1권 32-33문단을 따온 후 
                단어를 생략하거나 철자를 바꾸는 등 개발살을 내서 만든 것이므로 그 자체로 아무 의미가 없다.
            </p>
            <p>[출처] 나무위키</p>
        </>
    );
});

export default Purpose;