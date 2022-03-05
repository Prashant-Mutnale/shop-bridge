export default function textField (value){
    const  re = /^[0-9\b]+$/;
    return re.test(value)
}