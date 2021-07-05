#### React Class vs Function Style

Class - React 기능 Full 사용 가능 / class 문법 알아야하고 장황
Function - 함수 문법만 알면 사용 가능 / 기능 부족 (대표적 - State, Life Cycle API 사용 불가)

Hook 도입 -> Function에서도 다기능 사용 가능 (Class와 대등해짐)

#####1. 개발 환경 구축
```bash
$ npx create-react-app .
```
- src 폴더 내 App.css, index.css 정리
- App.js 정리 및 코딩

#####2. Component 생성
- Function Style Component ( **return** )
```javascript
function FuncComp(){
  return (
    <div className="container">
      <h2>function style component</h2>
    </div>
  )
}
```
- Class Style Component ( **extends, render, return** )
```javascript
class ClassComp extends React.Component{
  render(){
    return(
      <div className="container">
        <h2>class style component</h2>
      </div>
    )
  }
}
```
#####3. props 전달 방식
- Function Style Component ( **인자로 전달** )
```javascript
function FuncComp(props){
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {props.initNumber}</p>
    </div>
  )
}
```
- Class Style Component ( **this로 전달** )
```javascript
class ClassComp extends React.Component{
  render(){
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.props.initNumber}</p>
      </div>
    )
  }
}
```
#####3-1. Class에서 State 사용법
▼ 위 코드를 **State로 변환** ▼
```javascript
class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber
  }
  render(){
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
      </div>
    )
  }
}
```






# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

이텔릭체는 *별표(asterisks)* 혹은 _언더바(underscore)_를 사용하세요.
두껍게는 **별표(asterisks)** 혹은 __언더바(underscore)__를 사용하세요.
**_이텔릭체_와 두껍게**를 같이 사용할 수 있습니다.
취소선은 ~~물결표시(tilde)~~를 사용하세요.
<u>밑줄</u>은 `<u></u>`를 사용하세요.

1. 순서가 필요한 목록
1. 순서가 필요한 목록
  - 순서가 필요하지 않은 목록(서브) 
  - 순서가 필요하지 않은 목록(서브) 
1. 순서가 필요한 목록
  1. 순서가 필요한 목록(서브)
  1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  + 더하기(plus sign)

  [GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][Dribbble link]

[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.
구글 홈페이지: https://google.com
네이버 홈페이지: <https://naver.com>

[Dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"

![대체 텍스트(alternative text)를 입력하세요!](http://www.gstatic.com/webp/gallery/5.jpg "링크 설명(title)을 작성하세요.")

![Kayak][logo]

[logo]: http://www.gstatic.com/webp/gallery/2.jpg "To go kayaking."

`background`혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.


```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a = 'AAA';
  return a;
}
```

```bash
$ vim ./~zshrc
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting. 
But let's throw in a tag.
```

| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |

값 | 의미 | 기본값
---|:---:|---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 **자신**을 기준으로 배치 |
`absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
`fixed` | **브라우저 창**을 기준으로 배치 |

인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 1
>>> 중중첩된 인용문 2
>>> 중중첩된 인용문 3

<u>마크다운에서 지원하지 않는 기능</u>을 사용할 때 유용하며 대부분 잘 동작합니다.

<img width="150" src="http://www.gstatic.com/webp/gallery/4.jpg" alt="Prunus" title="A Wild Cherry (Prunus avium) in flower">

![Prunus](http://www.gstatic.com/webp/gallery/4.jpg)

---
(Hyphens)

***
(Asterisks)

___
(Underscores)

동해물과 백두산이 마르고 닳도록 
하느님이 보우하사 우리나라 만세
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세 
