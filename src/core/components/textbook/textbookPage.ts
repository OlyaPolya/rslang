const backgroundPageBtnColor = [ '#E9C46A', '#F4A261', '#E76F51', '#2A9D8F', '#237a70', '#416979','#2f5564',]
 


export function getTextbookPageLayout(level: number) {
  const color: string = backgroundPageBtnColor[level];
  return `
    <div class="wrapper">
    <div class="textbook">
      <div class="textbook-menu"></div>
      <div class="textbook-parts">
        <div class="parts-list">
          <ul class="parts">
            <li class="part part-beginner" data-level="0">А1<br>Beginner</li>
            <li class="part part-elementary" data-level="1">A2<br>Elementary</li>
            <li class="part part-intermediate" data-level="2">B1<br>Intermediate</li>
            <li class="part part-upper" data-level="3">B2<br>Upper-Intermediate</li>
            <li class="part part-advanced" data-level="4">C1<br>Advanced</li>
            <li class="part part-proficiency" data-level="5">C2<br>Proficiency</li>
            <li class="part part-complicated" data-level="6">Сложные<br>слова</li>
          </ul>
        </div>
      </div>
      <div class="textbook-body">
        <div class="body-words-list"></div>
        <div class="body-pages-list">
          <ul class="pages">
            <li class="page page-1" style="background-color:${color}" data-page="0">1</li>
            <li class="page page-2" style="background-color:${color}" data-page="1">2</li>
            <li class="page page-3" style="background-color:${color}" data-page="2">3</li>
            <li class="page page-4" style="background-color:${color}" data-page="3">4</li>
            <li class="page page-5" style="background-color:${color}" data-page="4">5</li>
            <li class="page page-6" style="background-color:${color}" data-page="5">6</li>
            <li class="page page-7" style="background-color:${color}" data-page="6">7</li>
            <li class="page page-8" style="background-color:${color}" data-page="7">8</li>
            <li class="page page-9" style="background-color:${color}" data-page="8">9</li>
            <li class="page page-10" style="background-color:${color}" data-page="9">10</li>
            <li class="page page-11" style="background-color:${color}" data-page="10">11</li>
            <li class="page page-12" style="background-color:${color}" data-page="11">12</li>
            <li class="page page-13" style="background-color:${color}" data-page="12">13</li>
            <li class="page page-14" style="background-color:${color}" data-page="13">14</li>
            <li class="page page-15" style="background-color:${color}" data-page="14">15</li>
            <li class="page page-16" style="background-color:${color}" data-page="15">16</li>
            <li class="page page-17" style="background-color:${color}" data-page="16">17</li>
            <li class="page page-18" style="background-color:${color}" data-page="17">18</li>
            <li class="page page-19" style="background-color:${color}" data-page="18">19</li>
            <li class="page page-20" style="background-color:${color}" data-page="19">20</li>
            <li class="page page-21" style="background-color:${color}" data-page="20">21</li>
            <li class="page page-22" style="background-color:${color}" data-page="21">22</li>
            <li class="page page-23" style="background-color:${color}" data-page="22">23</li>
            <li class="page page-24" style="background-color:${color}" data-page="23">24</li>
            <li class="page page-25" style="background-color:${color}" data-page="24">25</li>
            <li class="page page-26" style="background-color:${color}" data-page="25">26</li>
            <li class="page page-27" style="background-color:${color}" data-page="26">27</li>
            <li class="page page-28" style="background-color:${color}" data-page="27">28</li>
            <li class="page page-29" style="background-color:${color}" data-page="28">29</li>
            <li class="page page-30" style="background-color:${color}" data-page="29">30</li>
          </ul>
          <div class="body-btn-up">
          <span>↑</span>
          </div>
        </div>
        <div class="body-loading"></div>
      </div>
    </div>
  </div>
  `;
}