
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class YeOldeCrawler
{
	//capping searches at 10, so it doesn't go forever
  private static final int MaxSearch = 10;
  private Set<String> pagesVisited = new HashSet<String>();
  private List<String> pagesToVisit = new LinkedList<String>();


  public void search(String url)
  {
      while(this.pagesVisited.size() < MaxSearch)
      {
          String currentUrl;
          DirtyWork scanner = new DirtyWork();
          if(this.pagesToVisit.isEmpty())
          {
              currentUrl = url;
              this.pagesVisited.add(url);
          }
          else
          {
              currentUrl = this.nextUrl();
          }
          scanner.crawl(currentUrl); 
          this.pagesToVisit.addAll(scanner.getLinks());
      }
      System.out.println("\n**Done** Visited " + this.pagesVisited.size() + " web page(s)");
  }

  private String nextUrl()
  {
      String nextUrl;
      do
      {
          nextUrl = this.pagesToVisit.remove(0);
      } while(this.pagesVisited.contains(nextUrl));
      this.pagesVisited.add(nextUrl);
      return nextUrl;
  }
}