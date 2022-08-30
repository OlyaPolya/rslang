const backgroundPageBtnColor = [ '#E9C46A', '#F4A261', '#E76F51', '#2A9D8F', '#237a70', '#416979','#2f5564',]
 


export function getTextbookPageLayout(level: number) {
  const color: string = backgroundPageBtnColor[level - 1];
  return `
    <div class="wrapper">
    <div class="textbook">
      <div class="textbook-menu"></div>
      <div class="textbook-parts">
        <div class="parts-list">
          <ul class="parts">
            <li class="part part-beginner" data-level="1">
              <span>А1</span>
              <span>Beginner</span>
            </li>
            <li class="part part-elementary" data-level="2">
              <span>A2</span>
              <span>Elementary</span>
               </li>
            <li class="part part-intermediate" data-level="3">
              <span>B1</span>
              <span>Intermediate</span>
            </li>
            <li class="part part-upper" data-level="4">
              <span>B2</span>
              <span>Upper-Intermediate</span>
            </li>
            <li class="part part-advanced" data-level="5">
              <span>C1</span>
              <span>Advanced</span>
            </li>
            <li class="part part-proficiency" data-level="6">
              <span>C2</span>
              <span>Proficiency</span>
            </li>
            <li class="part part-complicated" data-level="7" >
              <span>Сложные</span>
              <span>слова</span> </li>
          </ul>
        </div>
      </div>
      <div class="textbook-body">
        <div class="body-words-list"></div>
        <div class="body-pages">
          <ul class="pages">
            <li class="page page-1" style="background-color:${color}" data-page="1">1</li>
            <li class="page page-2" style="background-color:${color}" data-page="2">2</li>
            <li class="page page-3" style="background-color:${color}" data-page="3">3</li>
            <li class="page page-4" style="background-color:${color}" data-page="4">4</li>
            <li class="page page-5" style="background-color:${color}" data-page="5">5</li>
            <li class="page page-6" style="background-color:${color}" data-page="6">6</li>
            <li class="page page-7" style="background-color:${color}" data-page="7">7</li>
            <li class="page page-8" style="background-color:${color}" data-page="8">8</li>
            <li class="page page-9" style="background-color:${color}" data-page="9">9</li>
            <li class="page page-10" style="background-color:${color}" data-page="10">10</li>
            <li class="page page-11" style="background-color:${color}" data-page="11">11</li>
            <li class="page page-12" style="background-color:${color}" data-page="12">12</li>
            <li class="page page-13" style="background-color:${color}" data-page="13">13</li>
            <li class="page page-14" style="background-color:${color}" data-page="14">14</li>
            <li class="page page-15" style="background-color:${color}" data-page="15">15</li>
            <li class="page page-16" style="background-color:${color}" data-page="16">16</li>
            <li class="page page-17" style="background-color:${color}" data-page="17">17</li>
            <li class="page page-18" style="background-color:${color}" data-page="18">17</li>
            <li class="page page-19" style="background-color:${color}" data-page="19">19</li>
            <li class="page page-20" style="background-color:${color}" data-page="20">20</li>
            <li class="page page-21" style="background-color:${color}" data-page="21">21</li>
            <li class="page page-22" style="background-color:${color}" data-page="22">22</li>
            <li class="page page-23" style="background-color:${color}" data-page="23">23</li>
            <li class="page page-24" style="background-color:${color}" data-page="24">24</li>
            <li class="page page-25" style="background-color:${color}" data-page="25">25</li>
            <li class="page page-26" style="background-color:${color}" data-page="26">26</li>
            <li class="page page-27" style="background-color:${color}" data-page="27">27</li>
            <li class="page page-28" style="background-color:${color}" data-page="28">28</li>
            <li class="page page-29" style="background-color:${color}" data-page="29">29</li>
            <li class="page page-30" style="background-color:${color}" data-page="30">30</li>
          </ul>
          <div class="body-btn-up">
          <span>↑</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}