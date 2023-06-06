import { Component } from '@angular/core';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent {
  nftArray: any[] = [
    {
      avatar: 'assets/ava1.png',
      username: 'KKSpecial',
      likes: 43,
      image: 'assets/nftimage1.png',
      title: 'Collection of nightmares',
      description: 'Nightmare (pt.15) 10☓10',
      category: 'Games',
      price: '$49.99'
    },
    {
      avatar: 'assets/ava2.png',
      username: 'MorugaNFT',
      likes: 88,
      image: 'assets/nftimage2.png',
      title: 'Apes',
      description: 'King Bored Ape #2414',
      category: 'Collectibles',
      price: '$49.99'
    },
    {
      avatar: 'assets/ava3.png',
      username: 'User-71068',
      likes: 24,
      image: 'assets/nftimage3.png',
      title: 'GALLERY_13',
      description: 'HorseNFT #1332',
      category: 'Games',
      price: '$49.99'
    },
    {
      avatar: 'assets/ava4.png',
      username: 'Angelina',
      likes: 93,
      image: 'assets/nft-image4.png',
      title: 'USSR',
      description: 'USSR 2.Edition 07',
      category: 'Collectibles',
      price: '$49.99'
    },
    {
      avatar: 'assets/ava1.png',
      username: 'KKSpecial',
      likes: 43,
      image: 'assets/nftimage1.png',
      title: 'Collection of nightmares',
      description: 'Nightmare (pt.15) 10☓10',
      category: 'Games',
      price: '$49.99'
    },
    {
      avatar: 'assets/ava2.png',
      username: 'MorugaNFT',
      likes: 88,
      image: 'assets/nftimage2.png',
      title: 'Apes',
      description: 'King Bored Ape #2414',
      category: 'Collectibles',
      price: '$49.99'
    },
    {
      avatar: 'assets/ava3.png',
      username: 'User-71068',
      likes: 24,
      image: 'assets/nftimage3.png',
      title: 'GALLERY_13',
      description: 'HorseNFT #1332',
      category: 'Games',
      price: '$49.99'
    }

  ];
  svgPath: string = 'assets/comments.svg';
}

