import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

interface Photo {
  id: string;
  images: { height: number; source: string; width: number }[];
}

interface FilteredPhoto {
  id: string;
  image: { height: number; source: string; width: number };
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  photos: FilteredPhoto[] = [];
  userName: string = 'Usuario';  // Valor por defecto
  selectedPhotoId: string | null = null;  // Para rastrear la foto seleccionada
  nextUrl: string | null = null;  // Para almacenar la URL de la siguiente página

  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
    this.loadPhotos();
    this.authService.getUserName().subscribe(response => {
      this.userName = response.name;
    });
  }

  loadPhotos(url?: string): void {
    this.authService.getPhotos(url).subscribe(response => {
      console.log('Respuesta completa de la API:', response); // Verificar la estructura completa
  
      // Manejo de la estructura inicial y la estructura de paginación
      let photosData = [];
      let paging = null;
  
      if (response.photos && response.photos.data) {
        photosData = response.photos.data;
        paging = response.photos.paging;
      } else if (response.data) {
        photosData = response.data;
        paging = response.paging;
      } else {
        console.error('Estructura de respuesta inesperada:', response);
        return;
      }
  
      const newPhotos = photosData.map((photo: Photo) => {
        return {
          id: photo.id,
          image: photo.images[0] // Selecciona la primera imagen de cada conjunto
        };
      });
  
      this.photos = this.photos.concat(newPhotos);
      
      this.nextUrl = paging && paging.next ? paging.next : null;
      console.log('nextUrl actualizada:', this.nextUrl); // Verificar que nextUrl se está actualizando correctamente
    }, error => {
      console.error('Error al cargar las fotos:', error);
    });
  }
  
  
  
  
  
  

  loadMorePhotos(): void {
    if (this.nextUrl) {
      this.loadPhotos(this.nextUrl);  // Cargar más fotos usando la URL de la siguiente página
    }
  }

  selectPhoto(photoId: string): void {
    this.selectedPhotoId = photoId;  // Actualiza el ID de la foto seleccionada
    this.authService.savePhotoName(photoId).subscribe(
      response => console.log(response.message),
      error => console.error(error)
    );
    this.router.navigate(['/home']);
  
  }

  isSelected(photoId: string): boolean {
    return this.selectedPhotoId === photoId;  // Verifica si la foto está seleccionada
  }
}


// import { Component,OnInit } from '@angular/core';

// interface Image {
//     name: string;
//     src: string;
//   }

// @Component({
//   selector: 'app-posts',
//   templateUrl: './posts.component.html',
//   styleUrls: ['./posts.component.css']
// })
// export class PostsComponent implements OnInit {
//     images: Image[] = [];
//     filteredImages: Image[] = [];
  
//     ngOnInit(): void {
//       this.loadImages();
//       this.filteredImages = this.images;
//     }
  
//     loadImages(): void {
//       const imageCount = 8; // Cambia esto al número de imágenes que tengas en la carpeta
//       for (let i = 1; i <= imageCount; i++) {
//         this.images.push({
//           name: `Post ${i}`,
//           src: `assets/images/posts/post${i}.jpg`
//         });
//       }
//     }
  
//     filterImages(event: any): void {
//     const filterCriteria = event.target.value;
//       if (filterCriteria === 'todos') {
//         this.filteredImages = this.images;
//       } else {
//         this.filteredImages = this.images;
//       }
//     }

//     sortImages(event: any): void {
//         const sortCriteria = event.target.value;
//         if (sortCriteria === 'recent') {
//           this.filteredImages = this.images.slice().reverse();
//         } else if (sortCriteria === 'oldest') {
//           this.filteredImages = this.images.slice();
//         } else if (sortCriteria === 'nameAsc') {
//           this.filteredImages = this.images.slice().sort((a, b) => a.name.localeCompare(b.name));
//         } else if (sortCriteria === 'nameDesc') {
//           this.filteredImages = this.images.slice().sort((a, b) => b.name.localeCompare(a.name));
//         }
//       }

//   }