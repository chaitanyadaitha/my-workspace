import package2Print from "@my-workspaces/package2";
const package1Print = () => {
    console.log('Hello from package 1');
    package2Print();
}

export default package1Print;