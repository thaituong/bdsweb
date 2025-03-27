/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
// import Recruiting from '../assets/images/Portfolio/Recruiting.png';
import NstSSO from '../assets/images/Portfolio/NstSSO.png';
import BDBinhPhuoc from '../assets/images/Portfolio/BDBinhPhuoc.png';
import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// ImgCompany
import ViettelComp from '../assets/images/Testimonials/ViettelComp.jpg';
import EximbankComp from '../assets/images/Testimonials/EximbankComp.png';
import HeinekenComp from '../assets/images/Testimonials/HeinekenComp.png';
import ViettelUser from '../assets/images/Testimonials/ViettelUser.png';
import EximbankUser from '../assets/images/Testimonials/EximbankUser.png';
import HeinekenUser from '../assets/images/Testimonials/HeinekenUser.png';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

// Partner
import ViettelCompPN from '../assets/images/Partner/ViettelComp.png';
import MobifoneComp from '../assets/images/Partner/MobifoneComp.png';
import NatureFoodsComp from '../assets/images/Partner/NatureFoodsComp.png';
import MatBaoComp from '../assets/images/Partner/MatBaoComp.png';
import ABBANKComp from '../assets/images/Partner/ABBANKComp.png';
import EmivestComp from '../assets/images/Partner/EmivestComp.png';
import MekopharComp from '../assets/images/Partner/MekopharComp.png';
import FPTComp from '../assets/images/Partner/FPTComp.png';
import BaoAnComp from '../assets/images/Partner/BaoAnComp.png';

export const Services = [
  {
    title: 'Web Development',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Mobile Development',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'UI/UX Design',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Partners = [
  {
    title: 'Viettel Business Solutions',
    imageUrl: ViettelCompPN,
  },
];

export const Customers = [
  {
    title: 'Viettel Business Solutions',
    imageUrl: ViettelCompPN,
  },
  {
    title: 'Mobifone',
    imageUrl: MobifoneComp,
  },
  {
    title: 'Nature Foods Co. Ltd',
    imageUrl: NatureFoodsComp,
  },
  {
    title: 'Mat Bao',
    imageUrl: MatBaoComp,
  },
  {
    title: 'ABBANK',
    imageUrl: ABBANKComp,
  },
  {
    title: 'Emivest GMP WHO',
    imageUrl: EmivestComp,
  },
  {
    title: 'Mekophar',
    imageUrl: MekopharComp,
  },
  {
    title: 'FPT',
    imageUrl: FPTComp,
  },
  {
    title: 'Bảo An',
    imageUrl: BaoAnComp,
  },
];

export const Portfolios = [
  {
    id: 'asd1293uvbvcbbd3',
    title: 'NST-SSO',
    imageUrl: NstSSO,
    type: 'Website',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  },
  {
    id: 'asd1293ufgdfgs4',
    title: 'Bóng Đá BP',
    imageUrl: BDBinhPhuoc,
    type: 'Website / Mobile Apps',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
  },
  {
    id: 'asd1293ulkmnbj6',
    title: 'CMS IOT',
    imageUrl: ManagementApp,
    type: 'Website / Mobile Apps',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
];

export const Advantages = [
  [{
    title: 'Kinh nghiệm',
    description: 'Sự kết hợp giữa sức trẻ, tri thức và đội ngũ các nhà quản lý đầy kinh nghiệm.',
    imageUrl: Communicative,
  },
  {
    title: 'Mở rộng',
    description: 'Áp dụng các mô hình phát triển ứng dụng hiện đại, dễ dàng triển khai trên nhiều loại thiết bị và tương tác với các hệ thống khác.',
    imageUrl: Management,
  }],
  [{
    title: 'Dịch vụ',
    description: 'Khai thác tốt mọi tiềm năng của các công nghệ mới hiện nay để tạo ra các sản phẩm chất lượng tốt nhất.',
    imageUrl: Collaborative,
  },
  {
    title: 'Giá cạnh tranh',
    description: "Tại Newtech chúng tôi tập trung vào việc mang lại giá trị thặng dư cho khách hàng. Lợi ích mang lại luôn lớn hơn rất nhiều so với giá trị đầu tư của khách hàng.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Khách hàng B',
    company: 'Trưởng phòng, Viettel',
    testimoni: 'Các giải pháp và dịch vụ mà NEWTECH cung cấp đã đáp ứng tốt các yêu cầu kỹ thuật và chiến lược của chúng tôi, đồng thời góp phần quan trọng vào việc nâng cao hiệu quả hoạt động của Viettel. Chúng tôi đặc biệt ấn tượng với khả năng linh hoạt và sự nhanh nhạy trong việc giải quyết các vấn đề phát sinh trong quá trình triển khai.',
    imageUrl: ViettelComp,
    imageCompanyUrl: ViettelUser,
  },
  {
    id: 2,
    name: 'Khách hàng C',
    company: 'Phó giám đốc, Heineken',
    testimoni: 'Chúng tôi mong muốn tiếp tục duy trì và mở rộng mối quan hệ hợp tác tốt đẹp này với NEWTECH trong thời gian tới, và tin tưởng rằng sự hợp tác giữa hai bên sẽ ngày càng thành công hơn nữa. Chân thành cảm ơn và chúc quý công ty ngày càng phát triển.',
    imageUrl: HeinekenComp,
    imageCompanyUrl: HeinekenUser,
  },
  {
    id: 3,
    name: 'Khách hàng A',
    company: 'Giám đốc, Eximbank',
    testimoni: 'Chúng tôi xin chân thành cảm ơn NEWTECH vì sự hợp tác và hỗ trợ quý báu trong thời gian qua. Qua các dự án đã thực hiện, chúng tôi đánh giá cao sự chuyên nghiệp, chất lượng và hiệu quả mà đội ngũ của quý công ty đã mang lại. Chúng tôi đặc biệt ấn tượng với sự sáng tạo và năng lực giải quyết vấn đề của các bạn, cũng như khả năng đáp ứng nhanh chóng các yêu cầu và điều chỉnh trong quá trình triển khai dự án. Sự tận tâm và cam kết của NEWTECH đã góp phần không nhỏ vào thành công của các dự án mà chúng tôi đã thực hiện.',
    imageUrl: EximbankComp,
    imageCompanyUrl: EximbankUser,
  },
];

export const TeamMembers = [
  {
    name: 'Rach David',
    position: 'CEO',
    imageUrl: CEO,
  },
  {
    name: 'Pauline Sydney',
    position: 'HRD',
    imageUrl: HRD,
  },
  {
    name: 'Granger Watterson',
    position: 'Finance',
    imageUrl: Finance,
  },
  {
    name: 'Tom Jimmy',
    position: 'Project Manager',
    imageUrl: ProjectManager,
  },
  {
    name: 'Jim Hendrix',
    position: 'Front-end Developer',
    imageUrl: Frontend1,
  },
  {
    name: 'Calvin Max',
    position: 'Front-end Developer',
    imageUrl: Frontend2,
  },
  {
    name: 'Hawkins Jim',
    position: 'Back-end Developer',
    imageUrl: Backend1,
  },
  {
    name: 'Don Bizaro',
    position: 'Back-end Developer',
    imageUrl: Backend2,
  },
  {
    name: 'Bill Markinson',
    position: 'Mobile Developer',
    imageUrl: Mobile1,
  },
  {
    name: 'Igor Kavarov',
    position: 'Mobile Developer',
    imageUrl: Mobile2,
  },
  {
    name: 'Freddie Curl',
    position: 'UI/UX Designer',
    imageUrl: UIUX2,
  },
  {
    name: 'Monica Lovegood',
    position: 'UI/UX Designer',
    imageUrl: UIUX1,
  },
];
