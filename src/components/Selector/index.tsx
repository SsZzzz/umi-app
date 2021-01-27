import React, { useEffect, useRef } from 'react';
import styles from './index.less';

interface selectorProps {
  children: React.ReactNode;
  selection?: boolean;
  onSelect?: (arr: Array<boolean>) => void;
  scrollRef?: any;
  style?: React.CSSProperties;
}

const Selector: React.FC<selectorProps> = (props: selectorProps) => {
  const { children, onSelect, scrollRef, style, selection = false } = props;

  const ref: any = useRef(null);
  const itemWidth = (ref.current?.children && ref.current?.children[0].offsetWidth) || 0;

  useEffect(() => {
    if (selection) addSelection();
    else removeSelection();
    return () => {
      removeSelection();
    };
  }, [selection]);

  function disableScroll() {
    const top = scrollRef.current.scrollTop;
    return function () {
      scrollRef.current.scrollTop = top;
    };
  }

  function addSelection() {
    document.onmousedown = function (e) {
      if (e.target !== ref.current) return;
      const posx = e.clientX;
      const posy = e.clientY;
      const div: HTMLElement = document.createElement('div');
      const scrollFn = disableScroll();
      scrollRef.current.addEventListener('scroll', scrollFn);
      div.className = styles.tempDiv;
      div.style.left = e.clientX + 'px';
      div.style.top = e.clientY + 'px';
      document.body.appendChild(div);
      document.onmousemove = function (ev) {
        div.style.left = Math.min(ev.clientX, posx) + 'px';
        div.style.top = Math.min(ev.clientY, posy) + 'px';
        div.style.width = Math.abs(posx - ev.clientX) + 'px';
        div.style.height = Math.abs(posy - ev.clientY) + 'px';
      };
      document.onmouseup = function () {
        const left = parseInt(div.style.left);
        const top = parseInt(div.style.top);
        const width = parseInt(div.style.width);
        const height = parseInt(div.style.height);
        getSelectedBox(top, left + width, top + height, left);
        scrollRef.current.removeEventListener('scroll', scrollFn);
        div.parentNode && div.parentNode.removeChild(div);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }

  function getSelectedBox(top: number, right: number, bottom: number, left: number) {
    if (!top || !right || !bottom || !left) return;
    const children = ref.current?.children;
    const arr: Array<boolean> = new Array(children?.length || 0);
    children?.forEach((child: any, i: number) => {
      const {
        top: clientTop,
        right: clientRight,
        bottom: clientBottom,
        left: clientLeft,
      } = child.getBoundingClientRect(); //基于左上角
      arr[i] = isBoxInSelection(clientTop, clientRight, clientBottom, clientLeft, top, right, bottom, left);
    });
    onSelect && onSelect(arr);
  }

  function isBoxInSelection(
    clientTop: number,
    clientRight: number,
    clientBottom: number,
    clientLeft: number,
    top: number,
    right: number,
    bottom: number,
    left: number,
  ): boolean {
    if (clientTop > bottom || clientBottom < top || clientRight < left || clientLeft > right) return false;
    else return true;
  }

  function removeSelection() {
    document.onmousedown = null;
  }

  return (
    <div
      className={styles.selectorContainer}
      style={{ gridTemplateColumns: `repeat(auto-fill, ${itemWidth}px)`, ...style }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Selector;
