export interface PortfolioNavigationProps {
    data: { route: string, text: string, id: number }[];
    scrollTo?: (...args: any) => void
}