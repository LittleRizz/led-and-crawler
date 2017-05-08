import javax.swing.*;
import java.awt.*;
import java.awt.event.*;



public class OutputWindow extends JFrame {
	
	String addressInput;
	private JLabel label;
	private JButton button;
	private JTextField textfield;
	private JLabel resultstable;

	//constructor, where we put in what the window will look like
	public OutputWindow(){
		setLayout(new FlowLayout());
		
		label = new JLabel("Crawler Label");
		add(label);
		
		textfield = new JTextField(15);
		add(textfield);
		
		button = new JButton("Get some URLS");
		add(button);
		
		resultstable = new JLabel();
		add(resultstable);
		
		event e = new event();
		
		
	}
	//here is our button listener, which waits for the click, and then
	//runs the crawler, and displays the results
	public class event implements ActionListener {
		public void actionPerformed(ActionEvent e) {
			addressInput = (String)(textfield.getText());
			YeOldeCrawler goTime = new YeOldeCrawler();
			goTime.search(addressInput);
			resultstable.setText("Found " + goTime.pagesVisited.size() + " pages!");
			
		}
	}
	
	
//main method	
	public static void main (String args[]) {
		OutputWindow gui = new OutputWindow();
		gui.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		gui.setSize(600, 600);
		gui.setVisible(true);
		gui.setTitle("Web Crawler Time!");
	
	}
}