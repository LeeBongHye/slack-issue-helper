interface SpinnerProps {
    size?: number;
    color?: string;
  }
  
  class Spinner {
    private element: HTMLElement;
    private size: number;
    private color: string;
  
    constructor(parent: HTMLElement, { size = 24, color = '#ffffff' }: SpinnerProps) {
      this.element = document.createElement('div');
      this.element.className = 'spinner';
      parent.appendChild(this.element);
  
      this.size = size;
      this.color = color;
    }
  
    show() {
      this.element.style.display = 'block';
    }
  
    hide() {
      this.element.style.display = 'none';
    }
  
    render() {
      this.element.innerHTML = `
        <div class="spinner-border" style="width: ${this.size}px; height: ${this.size}px; border-color: ${this.color}"></div>
      `;
    }
  }