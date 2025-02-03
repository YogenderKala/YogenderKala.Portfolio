const Footer = () => {
  return (
    <div className="text-lightGreen text-xl syne my-8 ">
      <div className=" flex items-center justify-center my-3">
        <div>© 2025 Yogi</div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <a href="https://www.linkedin.com/in/yogenderprasadkala/">
          <img src="/icons8-linkedin.svg" alt="Linkedin" width={20} />
        </a>
        <a href="https://github.com/YogenderKala">
          <img src="/icons8-github.svg" alt="Github" width={20} />
        </a>
        <a href="https://leetcode.com/u/YogiGotNoChill/">
          <img src="/icons8-leetcode.svg" alt="Leetcode" width={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
