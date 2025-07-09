"use client";
import styled, { css } from "styled-components";

type Breakpoint = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColProps {
  xs?: Breakpoint;
  sm?: Breakpoint;
  md?: Breakpoint;
  lg?: Breakpoint;
  xl?: Breakpoint;
  xxl?: Breakpoint;
  padding?: string;
}

interface RowProps {
  justify?: string;
  align?: string;
  r_gap?: string;
  margin?: string;
  padding?: string;
}

export const Container = styled.div`
  width: 1420px;
  margin: 0 auto;

  @media (max-width: 1430px) {
    width: 1140px;
  }

  @media (max-width: 1200px) {
    width: 960px;
  }

  @media (max-width: 992px) {
    width: 720px;
  }

  @media (max-width: 768px) {
    width: 540px;
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${({ r_gap }) => r_gap || "0"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
`;

const generateColWidth = (cols: Breakpoint) => css`
  width: ${(100 / 12) * cols}%;
`;

export const Col = styled.div<ColProps>`
  padding: ${({ padding }) => padding || "0"};

  ${({ xs, sm, md, lg, xl, xxl }) =>
    css`
      ${generateColWidth(xs ?? sm ?? md ?? lg ?? xl ?? xxl ?? 12)}

      @media (min-width: 577px) and (max-width: 768px) {
        ${sm
          ? generateColWidth(sm)
          : md
          ? generateColWidth(md)
          : lg
          ? generateColWidth(lg)
          : xl
          ? generateColWidth(xl)
          : xxl && generateColWidth(xxl)}
      }

      @media (min-width: 769px) and (max-width: 992px) {
        ${md
          ? generateColWidth(md)
          : lg
          ? generateColWidth(lg)
          : xl
          ? generateColWidth(xl)
          : xxl && generateColWidth(xxl)}
      }

      @media (min-width: 993px) and (max-width: 1200px) {
        ${lg
          ? generateColWidth(lg)
          : xl
          ? generateColWidth(xl)
          : xxl && generateColWidth(xxl)}
      }

      @media (min-width: 1201px) and (max-width: 1400px) {
        ${xl ? generateColWidth(xl) : xxl && generateColWidth(xxl)}
      }

      @media (min-width: 1401px) {
        ${xxl && generateColWidth(xxl)}
      }
    `}
`;
