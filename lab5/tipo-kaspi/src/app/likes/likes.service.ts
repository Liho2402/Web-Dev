import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductLocation } from '../product-location';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private likedProductsSource = new BehaviorSubject<ProductLocation[]>([]);
  likedProducts$ = this.likedProductsSource.asObservable();
  
  // Array to store original products that have been moved to likes
  private removedFromMainView: ProductLocation[] = [];

  constructor() {}

  addToLikes(product: ProductLocation): void {
    const currentLikedProducts = this.likedProductsSource.value;
    // Check if product already exists in likes
    if (!currentLikedProducts.some(p => p.id === product.id)) {
      
      this.removedFromMainView.push({...product});
      
      if (!product.likes) product.likes = 0;
      product.likes++;
      
      this.likedProductsSource.next([...currentLikedProducts, product]);
    }
  }

  removeFromLikes(productId: number): void {
    const currentLikedProducts = this.likedProductsSource.value;
    const updatedLikedProducts = currentLikedProducts.filter(p => p.id !== productId);
    
    // Reset likes count
    const product = currentLikedProducts.find(p => p.id === productId);
    if (product) {
      product.likes = 0;
    }
    
    this.likedProductsSource.next(updatedLikedProducts);
  }

  isProductInLikes(productId: number): boolean {
    return this.likedProductsSource.value.some(p => p.id === productId);
  }

  isRemovedFromMainView(productId: number): boolean {
    return this.removedFromMainView.some(p => p.id === productId);
  }

  getLikedProducts(): ProductLocation[] {
    return this.likedProductsSource.value;
  }
}