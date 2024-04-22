import { ReactNode } from "react"
import { HeaderNavigationSplitter } from "./HeaderNavigationSplitter"

interface PropsChildren {
    children: ReactNode
}

const ComponentListContainer = ({ children }: PropsChildren) => {
    return <div style={{width: '100%'}}>{children}</div>
}

const ConterContentContainer = ({ children }: PropsChildren) => {
    return <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center'}}>{children}</div>
}

interface Props {
    top?: ReactNode;
    center: ReactNode;
    botton?: ReactNode;
  }

export const BodySplitter = ({top, center, botton}: Props) => {
  
return (
    <HeaderNavigationSplitter 
    header={top && <ComponentListContainer>{top}</ComponentListContainer>}
    navigation={botton && <ComponentListContainer>{botton}</ComponentListContainer>}>
        {center && <ConterContentContainer>{center}</ConterContentContainer>}
    </HeaderNavigationSplitter>
  )
}
