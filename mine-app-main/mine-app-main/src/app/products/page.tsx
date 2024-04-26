import Link from "next/link";
import Nav from "../../../components/navbar";


export default function products() {
  return (
    <div>
     <Nav/>
      <h3>products list</h3>
      <ol>
        <li><Link href="/products/product">products</Link></li>
        <li><Link href="/products/product">products</Link></li>
        <li><Link href="/products/product">products</Link></li>
        <li><Link href="/products/product">products</Link></li>
        <li><Link href="/products/product">products</Link></li>
      </ol>
    </div>
  );
}
