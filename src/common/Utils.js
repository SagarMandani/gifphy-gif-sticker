import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;

// common method file

export const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const strReplace = (str) => {
    return (str && str.replace(/["']/g, ""))
}

export const isTabletBasedOnRatio = () => {
    if (aspectRatio > 1.6) {
        return false;
    } else {
        return true;
    }
}