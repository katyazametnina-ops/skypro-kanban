import styled from "styled-components";

export const CalendarWrap = styled.div`
  width: 182px;
  margin-bottom: 20px;

  .calendar__ttl {
    margin-bottom: 14px;
    padding: 0 7px;
    color: ${({ theme }) => theme.colors.text} !important;
  }

  .calendar__p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 10px;
    line-height: 1;
  }

  .calendar__p span,
  .calendar__p .date-control {
    color: ${({ theme }) => theme.colors.text} !important;
  }

  .calendar__month {
    color: ${({ theme }) => theme.colors.gray};
  }

  .calendar__day-name {
    color: ${({ theme }) => theme.colors.gray};
  }

  .calendar__cell {
    color: ${({ theme }) => theme.colors.gray};
  }

  .calendar__cell._cell-day:hover:not(._active-day) {
    background-color: ${({ theme }) => theme.colors.bg};
  }

  .calendar__cell._active-day {
    background-color: ${({ theme }) => theme.colors.activeDayBg};
    color: ${({ theme }) => theme.colors.activeDayText};
  }

  .calendar__cells {
    height: auto;
    min-height: 126px;
  }

  .calendar__period {
    padding: 0 7px;
    margin-top: 14px;
  }

  .nav__action svg {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;
