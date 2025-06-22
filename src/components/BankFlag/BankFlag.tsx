import AmexIcon from "@/icons/bankFlags/AmexIcon";
import DiscoverIcon from "@/icons/bankFlags/DiscoverIcon";
import EloIcon from "@/icons/bankFlags/EloIcon";
import MasterCardIcon from "@/icons/bankFlags/MasterCardIcon";
import VisaIcon from "@/icons/bankFlags/VisaIcon";

interface BankFlag {
    flagBank: string;
}

const BankFlag = (prop:BankFlag) => {

    switch (prop.flagBank) {
        case 'amex':
            return <AmexIcon />
        case 'discover':
            return <DiscoverIcon />
        case 'elo':
            return <EloIcon />
        case 'mastercard':
            return <MasterCardIcon />
        case 'visa':
            return <VisaIcon />
        default:
            return null
    }
}

export default BankFlag