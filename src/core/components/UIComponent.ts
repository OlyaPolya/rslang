interface Component {
  parentTagName: string;
  tagName: string;
  className: string;
  innerText: string;
}

export default function createUIComponent(component: Component) {
  const parentContainer = document.createElement(`${component.parentTagName}`);
  const container = document.createElement(`${component.tagName}`);

  container.className = component.className;
  container.innerText = component.innerText;
  parentContainer.appendChild(container);

  return parentContainer;
}