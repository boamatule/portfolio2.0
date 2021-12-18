import { StyledIcon } from './Icon.styles';

const Icon = (color, { ...children }) => <StyledIcon background={color}>{children}</StyledIcon>;

export default Icon;
